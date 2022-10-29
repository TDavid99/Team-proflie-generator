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
                    break;
                    default:
                    return;
                }
            });
        }
        //engineer info from user
        getEngineerInfo() {
            inquirer.prompt(addEngineerQA).then((answers) => {
                const engineer = new Engineer(
                    answers.engineerName,
                    answers.engineerId,
                    answers.engineerEmail,
                    answers.engineerGithub,
                );
                allEnigineers.push(engineer);
                this.addAnotherEmployeeQAA();
            });
        }
       // Inter info from user
       getInterInfo() {
        inquirer.prompt(addInternQA).then((answers) => {
       const intern = new Intern(
         answers.internName,
         answers.internId,
         answers.internEmail,
         answers.internSchool 
       );
       allInterns.push(intern);
       this.addAnotherEmployeeQAA();
        });
       }

       //if user wants to add another employee; it no ends prompt and generates html
       addAnotherEmployeeQAA() {
        inquirer.prompt(addAnotherEmployeeQAAA).then((answers) => {
            if (answers.confirmNewEmployee) {
                this.addEngineerOrIntern();
            } else {
             this.createHtml(teamManager, allEnigineers, allInterns);

             console.log(
                "\nYour team profile is complete in dist folder.\n"
              );
            }
            return;
        });
       }
       //creates html in dist folder
       createHtml(teamManager, allEnigineers, allInterns) {
        const file = fs.promises.writeFile(
            "./dist/index,html",
         generateHtml( teamManager, allEnigineers, allInterns),
         "utf-8"
        );
       }
       
    }


