// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  // description, install, usage, contributions, test instructions
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "What is a description of the application?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are some instructions for installing the application?",
  },
  {
    type: "input",
    name: "usage",
    message: "How to use this application?",
  },
  {
    type: "input",
    name: "contributions",
    message: "Who are the contributors for this application?",
  },
  {
    type: "input",
    name: "testins",
    message: "What are instructions to test this application?",
  },
  // license choice
  {
    type: "list",
    name: "license",
    message: "What licensing did you use",
    choices: ["mit", "NONE"],
  },
  // github and email
  {
    type: "input",
    name: "username",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// TODO: Create a function to write README file

// function writeToFile(fileName, data) {
//   fs.writeFile();
// }

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // for each index in questions console data[0] ++
    const test = generateMarkdown(answers);
    // creates readme inside of xtreme file
    fs.writeFile("./Xtreme_Readme/README.md", test, (err) =>
      err ? console.log(err) : console.log("Successfully created readme")
    );
  });
}

// Function call to initialize app
init();
