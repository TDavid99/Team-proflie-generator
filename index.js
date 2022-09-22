const inquirer = require ('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');


const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const intern = require('./lib/intern');


const dist_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(dist_DIR, 'index.html');

const renderm = require('./src/output')