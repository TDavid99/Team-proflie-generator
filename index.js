const inquirer = require("inquirer");
const fs = require("fs");


const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const {
  managerQA,
  addEngineerQA,
  addInternQA,
  chooseEngineerOrIntern,
  addAnotherEmployeeQAA,
} = require("./lib/QA");
// const { profile } = require("console");
const generateHtml = require("./src/generateHtml");
const teamManager = [];
const allEngineers = [];
const allInterns = [];

class TeamProfile {
  constructor() {
    this.teamManager = [];
    this.allEnigineers = [];
    this.allInterns = [];
  }
  //manager info from user
  getManagerData() {
    inquirer.prompt(managerQA).then((answers) => {
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
    inquirer.prompt(chooseEngineerOrIntern).then((answers) => {
      switch (answers.addEmployee) {
        case "Engineer":
          this.getEngineerData();
          break;
        case "Intern":
          this.getInternData();
          break;
        default:
          return;
      }
    });
  }
  //engineer info from user
  getEngineerData() {
    inquirer.prompt(addEngineerQA).then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      allEngineers.push(engineer);
      this.addAnotherEmployeeQAA();
    });
  }
  // Inter info from user
  getInternData() {
    inquirer.prompt(addInternQA).then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      allInterns.push(intern);
      this.addAnotherEmployeeChoice();
    });
  }

  //if user wants to add another employee; it no ends prompt and generates html
  addAnotherEmployeeChoice() {
    inquirer.prompt(addAnotherEmployeeQAA).then((answers) => {
      if (answers.confirmNewEmployee) {
        this.addEngineerOrIntern();
      } else {
        this.createHtml(teamManager, allEngineers, allInterns);

        console.log(
          "\nYour team profile is complete in dist folder.\n"
        );
      }
      return;
    });
  }
  //creates html in dist folder
  createHtml(teamManager, allEngineers, allInterns) {
    const file = fs.promises.writeFile(
      "./dist/index,html",
      generateHtml(teamManager, allEngineers, allInterns),
      "utf-8"
    );
  }
  // runs prompt
  init() {
    console.log("Team Profile Generator.");
    this.getManagerData();
  }
}

const profile1 = new TeamProfile();

profile1.init();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 nit();
