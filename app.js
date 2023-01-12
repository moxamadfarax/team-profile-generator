const fs = require("fs");
const inquirer = require("inquirer");
const cssGen = require("./src/genCSS");
const htmlGen = require("./src/genHTML");
const cssResetGen = require("./src/getCSSreset");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

let managerData = [];
let internData = [];
let engineerData = [];

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
      const newManager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNum
      );
      managerData.push(newManager);
      if (answers.decision === "Engineer") {
        engineerQuestions();
      } else if (answers.decision === "Intern") {
        internQuestions();
      } else if (answers.decision === "Make Team") {
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
        name: "decision",
        default: 2,
        choices: ["Engineer", "Intern", "Make Team"],
      },
    ])
    .then((answers) => {
      const newEngineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      engineerData.push(newEngineer);
      if (answers.decision === "Engineer") {
        engineerQuestions();
      } else if (answers.decision === "Intern") {
        internQuestions();
      } else if (answers.decision === "Make Team") {
      }
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
        name: "decision",
        default: 2,
        choices: ["Engineer", "Intern", "Make Team"],
      },
    ])
    .then((answers) => {
      const newIntern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      internData.push(newIntern);
      if (answers.decision === "Engineer") {
        engineerQuestions();
      } else if (answers.decision === "Intern") {
        internQuestions();
      } else if (answers.decision === "Make Team") {
      }
    });
}

function createHtml() {
  if (managerData.length >= 1) {
    htmlGen.managerCardGen(
      managerData[0].name,
      managerData[0].role,
      managerData[0].id,
      managerData[0].email,
      managerData[0].officeNum
    );
  }
  if (engineerData.length >= 1) {
    htmlGen.engineerCardGen(
      engineerData[0].name,
      engineerData[0].role,
      engineerData[0].id,
      engineerData[0].email,
      engineerData[0].github
    );
  }
  if (internData.length >= 1) {
    htmlGen.internCardGen(
      internData[0].name,
      internData[0].role,
      internData[0].id,
      internData[0].email,
      internData[0].school
    );
  }
}

questions();
