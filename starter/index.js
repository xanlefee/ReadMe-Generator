const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


//const README = 

// 1. come up with README.md file structure as questions
// 2. Decide what qs to ask and question format (prompt, choices, answers, select box)
// 3. handle user input
// 4. generate README.md based on user input
//5. write to README.md file



// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("File is written!"));
}

// function to initialize program
function init() {
    inquirer
    .prompt([

        {
            type: "input",
            name: "name",
            message: "Howdy Partner, what's your full name?"

        },

        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"

        },
        {
            type: "input",
            name: "description",
            message: "Describe your project"

        },
        {
            type: "input",
            name: "contents",
            message: "Do you want a table of contents?"

        },

        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project?"

        },

        {
            type: "input",
            name: "usage",
            message: "Describe the purpose and usage of your project"

        },

        {
            type: "list",
            name: "license",
            message: "What License do you need for your project?",
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']

        },

        {
            type: "input",
            name: "contributing",
            message: "What does the user need to know about contributing to the repo?"

        },

        {
            type: "input",
            name: "tests",
            message: "what command should be used to run tests?"

        },

        {
            type: "input",
            name: "github",
            message: "Great! We are almost there. Now what's your github account name?"

        },
    ])

    .then((answers) => {
        const readmeContent = generateMarkdown(answers);
        const name= answers.name;
        const title = answers.title;
        const description = answers.description;
        const contents = answers.contents;
        const installation = answers.installation;
        const usage = answers.usage;
        const license = answers.license;
        const contributing = answers.contributing;
        const tests = answers.tests;
        const questions = answers.questions;
        const github = answers.github;

        writeToFile('README.md', readmeContent);
    })

};

// function call to initialize program
init();
//writeToFile("README.md", data);
