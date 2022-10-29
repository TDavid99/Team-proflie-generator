const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");




const fs = require('fs');

const teamArray = [];

const {
    ManagerQA,
    AddEngineerQA,
    addInternQA,
    chooseEnigineerOrIntern,
    addAnotherEmployeeQAA,
    } = require('./lib/QA');
    const generateHtml = require('./src/generateHtml');
    const teamManager = [];
    const allEnigineers = [];
    const allInterns = [];

    class TeamProfile {
        constructor(){
            this.teamManager = [];
            this.allEnigineers =[];
            this.allInterns = [];
        }
        //manager info from user
        getManagerInfo() {
            inquirer.prompt(ManagerQA).then((answers)=> {
                const manager = new Manager(
                    answers.managerName,
                    answers.managerId,
                    answers.managerEmail,
                    answers.managerOfficeNumber
                );
                teamManager.push(manager);
                this.addEngineerOrIntern();
            });
        }
        //inter or engineer addd by user
        addEngineerOrIntern() {
            inquirer.prompt(chooseEnigineerOrIntern).then((answers) => {
                switch(answers.addEmployee) {
                    case "Engineer":
                        this.getEngineerInfo();
                        break;
                        case "Intern":
                    this.getInterInfo();
                }
            }
        }
    }