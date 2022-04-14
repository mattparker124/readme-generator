// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please enter installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter your usage information',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter your contribution guidelines',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please enter your testing instructions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does this project use?',
        choices: ['GNU_AGPLv3', 'GNU_GPLv3', 'Mozilla_Public_License_2.0', 'Apache_License_2.0', 'MIT_License', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers);
            return generateMarkdown(answers);
        })
        .then(data => {
            writeToFile(data);
        })
        .catch(err => {
            console.log(err);
        });
}

// Function call to initialize app
init();
