// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
 {
    type: 'input',
    name: 'title',
    message: 'What is your project title?'
 },
 {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project',
 },
 {
    type: 'input',
    name: 'installation',
    message: 'Describe the installation process',

 },
 {
    type: 'input',
    name: 'usage',
    message: 'Describe how to use this project',
 },
 {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'Other'],
 },
 {
    type: 'input',
    name: 'contributing',
    message: 'Who contributed to this project?'
 },
 {
    type: 'input',
    name: 'tests',
    message: 'How can users run tests?'
 },
 {
   type: 'input',
   name: 'questions',
   message: 'What is your GitHub username?'
 },
 {
   type: 'input',
   name: 'questions2',
   message: 'What is your email address?'
 },
];

module.exports = questions;
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log(`File ${fileName} has been successfully created.`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();
