// open in terminal
// ask user questions for questions 
// use inquirer to ask questions
// gather answers for readme file
//us fs for readme

// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generate");
// var path = require("path");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is a good Title for your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is a good Description of your project?",
        name: "description",
    },
    {
        type: "input",
        message: "How do you Install your application?",
        name: "installation",
    },
    {
        type: "input",
        message: "How do you Install your application?",
        name: "installation",
    },
    {
        type: "input",
        message: "How do you Use your application?",
        name: "usage",
    },
    {
        type: "list",
        message: "What License did you use for this repository?",
        choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
        name: "license",
    },
    {
        type: "input",
        message: "How can people Contribute to your project?",
        name: "contributing",
    },
    {
        type: "input",
        message: "How do people update the tests for your project?",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address where users and contributors can send questions?",
        name: "email"
    },
]
inquirer
.prompt(questions)
.then((response) => {
    return fs.writeFile("./output/README.md", generateMarkdown(response), function(err){
            if(err) {
                
             console.log(err)
            }
        });
    });

// switch case
