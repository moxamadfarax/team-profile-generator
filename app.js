const fs = require("fs");
const inquirer = require("inquirer");
const htmlGen = require("./src/genHTML");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
let managerData = [];

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
    .then((answers1) => {
      const newManager = new Manager(
        answers1.managerName,
        answers1.managerId,
        answers1.managerEmail,
        answers1.managerOfficeNum
      );
      fs.writeFile(
        "./dist/index.html",
        htmlGen.managerCardGen(
          answers1.managerName,
          answers1.managerId,
          answers1.managerEmail,
          answers1.managerOfficeNum
        ),
        (err) => {
          if (err) throw err;
        }
      );
      managerData.push(newManager);
      if (answers1.decision === "Engineer") {
        engineerQuestions();
      } else if (answers1.decision === "Intern") {
        internQuestions();
      } else if (answers1.decision === "Make Team") {
        console.log("All done!");
        fs.appendFile("./dist/index.html", htmlGen.endHtml(), (err) => {
          if (err) throw err;
        });
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
    .then((answers2) => {
      const newEngineer = new Engineer(
        answers2.engineerName,
        answers2.engineerId,
        answers2.engineerEmail,
        answers2.engineerGithub
      );
      fs.appendFile(
        "./dist/index.html",
        htmlGen.engineerCardGen(
          answers2.engineerName,
          answers2.engineerId,
          answers2.engineerEmail,
          answers2.engineerGithub
        ),
        (err) => {
          if (err) throw err;
        }
      );
      if (answers2.decision === "Engineer") {
        engineerQuestions();
      } else if (answers2.decision === "Intern") {
        internQuestions();
      } else if (answers2.decision === "Make Team") {
        console.log("All done!");
        fs.appendFile("./dist/index.html", htmlGen.endHtml(), (err) => {
          if (err) throw err;
        });
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
    .then((answers3) => {
      const newIntern = new Intern(
        answers3.internName,
        answers3.internId,
        answers3.internEmail,
        answers3.internSchool
      );
      fs.appendFile(
        "./dist/index.html",
        htmlGen.internCardGen(
          answers3.internName,
          answers3.internId,
          answers3.internEmail,
          answers3.internSchool
        ),
        (err) => {
          if (err) throw err;
        }
      );
      if (answers3.decision === "Engineer") {
        engineerQuestions();
      } else if (answers3.decision === "Intern") {
        internQuestions();
      } else if (answers3.decision === "Make Team") {
        fs.appendFile("./dist/index.html", htmlGen.endHtml(), (err) => {
          console.log("All done!");
          if (err) throw err;
        });
      }
    });
}

questions();
