const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user
function promptUser(){
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "what is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "what is your email address?",
    },
    {
      type: "input",
      name: "title",
      message: "what is your project's name?",
    },
    {
      type: "input",
      name: "descpription",
      message: "Please write a short description of your project",
    },
    {
      type: "list",
      name: "License",
      message: "What kind of license should your project have?",
      choices: [
        'MIT',
        'GNU',
        'ISC',
        'Apache',
        'Unlicensed'
      ]
    },
    {
      type: "input",
      name: "dependencies",
      message: "what command should be run to install dependencies?",
    },
    {
      type: "input",
      name: "test",
      message: "What command should be run to run test?",
    },
    {
      type: "input",
      name: "info",
      message: "What does the user need to know about using the repo?",
    },
    {
      type: "input",
      name: "info",
      message: "What does the user need to know about contributing to the repo?",
    }
  ])
}

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("README.md", data, function(err) {
    if(err){
      return console.log(err);
    }
  })
}

// function to initialize program
async function init() {
  try{
    const answers = await promptUser();
    const markdown = generateMarkdown(answers);

    await writeFileAsync("README.md", markdown);
  }catch(err){
    console.log(err);
  }

}

// function call to initialize program
init();
