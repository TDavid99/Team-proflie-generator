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

//manager info from user
function getManagerData() {
  inquirer.prompt(managerQA).then((answers) => {
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.managerOfficeNumber
    ).then;
    teamManager.push(manager);
    addEngineerOrIntern();
  });
}
//intern or engineer addd by user
function addEngineerOrIntern() {
  inquirer.prompt(chooseEngineerOrIntern).then((answers) => {
    switch (answers.addEmployee) {
      case "Engineer":
        getEngineerData();
        break;
      case "Intern":
        getInternData();
        break;
      default:
        return;
    }
  });
}
//engineer info from user
function getEngineerData() {
  inquirer.prompt(addEngineerQA).then((answers) => {
    const engineer = new Engineer(
      answers.engineerName,
      answers.engineerId,
      answers.engineerEmail,
      answers.engineerGithub
    );
    allEngineers.push(engineer);
  
    addAnotherEmployeeChoice();
  });
}
// Intern info from user
function getInternData() {
  inquirer.prompt(addInternQA).then((answers) => {
    const intern = new Intern(
      answers.internName,
      answers.internId,
      answers.internEmail,
      answers.internSchool
    );
    allInterns.push(intern);
    addAnotherEmployeeChoice();
  });
}

//if user wants to add another employee; it no ends prompt and generates html
function addAnotherEmployeeChoice() {
  inquirer.prompt(addAnotherEmployeeQAA).then((answers) => {
    if (answers.confirmNewEmployee) {
      addEngineerOrIntern();
    } else {
      createHtml(teamManager, allEngineers, allInterns);

      console.log("\nYour team profile is complete in dist folder.\n");
    }
    return;
  });
}
//creates html in dist folder
function createHtml(teamManager, allEngineers, allInterns) {
  const file = fs.promises.writeFile(
    "./dist/index.html",
    generateHtml(teamManager, allEngineers, allInterns),
    "utf-8"
  );
}
// runs prompt
function init() {
  console.log("Team Profile Generator.");
  getManagerData();
}

init();