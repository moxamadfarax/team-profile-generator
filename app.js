const fs = require("fs");
const inquirer = require("inquirer");
const cssGen = require("./src/genCSS");
const htmlGen = require("./src/genHTML");
const cssResetGen = require("./src/getCSSreset");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

let info = {
  managerData: [],
  engineerData: [],
  internData: [],
};

function questions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the managers name?",
        name: "managerName",
      },
      {
        type: "input",
        message: "What is the managers employee id?",
        name: "managerId",
      },
      {
        type: "input",
        message: "What is the managers email?",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "What is the managers office number?",
        name: "managerOfficeNum",
      },
      {
        type: "list",
        message:
          "Choose which employee you would like to add. If none then make your team.",
        name: "decision",
        default: 2,
        choices: ["Engineer", "Intern", "Make Team"],
      },
    ])
    .then((answers) => {
      if (answers.decision === "Engineer") {
        console.log("Engineer");
        engineerQuestions();
      } else if (answers.decision === "Intern") {
        console.log("Intern");
        internQuestions();
      } else if (answers.decision === "Make Team") {
        console.log("Make Team");
      }
    });
}
function engineerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineers name?",
        name: "engineerName",
      },
      {
        type: "input",
        message: "What is the engineers employee id?",
        name: "engineerId",
      },
      {
        type: "input",
        message: "What is the engineers email?",
        name: "engineerEmail",
      },
      {
        type: "input",
        message: "What is the engineers github username?",
        name: "engineerGithub",
      },
      {
        type: "list",
        message:
          "Choose which employee you would like to add. If none, then make your team.",
        name: "addEmployee",
        default: 0,
        choices: ["Engineer", "Intern", "Make Team"],
      },
    ])
    .then((answers) => {
      console.log(answers.engineer);
    });
}
function internQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the interns name?",
        name: "internName",
      },
      {
        type: "input",
        message: "What is the interns employee id?",
        name: "internId",
      },
      {
        type: "input",
        message: "What is the interns email?",
        name: "internEmail",
      },
      {
        type: "input",
        message: "Which school is the is the intern attending?",
        name: "internSchool",
      },
      {
        type: "list",
        message:
          "Choose which employee you would like to add. If none, then make your team.",
        name: "addEmployee",
        default: 0,
        choices: ["Engineer", "Intern", "Make Team"],
      },
    ])
    .then((answers) => {
      console.log(answers.engineer);
    });
}
questions();
