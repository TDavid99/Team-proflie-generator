const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");




const fs = require('fs');
const inquirer = require('inquirer');

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