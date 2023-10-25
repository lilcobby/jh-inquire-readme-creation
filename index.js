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
    choices: ["mit", "unlicense", "apache-2.0", "NONE"],
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

// creates prompts functions
function prompts() {
  inquirer.prompt(questions).then((answers) => {
    // Creates folder, creates readme file
    fs.mkdirSync("./Xtreme_Readme");
    const test = generateMarkdown(answers);
    // Creates readme inside of xtreme file
    fs.writeFile("./Xtreme_Readme/README.md", test, (err) =>
      err
        ? console.log(err)
        : console.log("You have successfully created readme")
    );
  });
}

// TODO: Create a function to initialize app
// ai assist:
function init() {
  // Removes existing readme file and folder if you have run the program multiple times
  const remove = fs.existsSync("./Xtreme_Readme");
  if (remove) {
    console.log(`${"Xtreme_Readme"} is being deleted...`);
    fs.rm("Xtreme_Readme", { recursive: true, force: true }, (err) => {
      if (err) {
        throw err;
      }
      console.log(`${"Xtreme_Readme"} is deleted`);

      // Continue with the inquirer.prompt here
      prompts();
    });
  } else {
    // Continue with the inquirer.prompt here
    prompts();
  }
}
init();
// my stuff:
// // Function call to initialize app
// init();
// function init() {
//   // removes existing readme file and folder if you have run the program multiple times
//   const remove = fs.existsSync("./Xtreme_Readme");
//   if (remove) {
//     fs.rm("Xtreme_Readme", { recursive: true, force: true }, (err) => {
//       if (err) {
//         throw err;
//       }
//       return console.log("Xtreme_readme is deleted");
//     });
//   }

//   inquirer.prompt(questions).then((answers) => {
//     // for each index in questions console data[0] ++?
//     // creates folder, creates readme file
//     fs.mkdirSync("./Xtreme_Readme");
//     const test = generateMarkdown(answers);
//     // creates readme inside of xtreme file
//     fs.writeFile("./Xtreme_Readme/README.md", test, (err) =>
//       err
//         ? console.log(err)
//         : console.log("You have successfully created readme")
//     );
//   });
// }
// // Function call to initialize app
