const fs = require("fs");
const inquirer = require("inquirer");
const cssGen = require("./src/genCSS");
const htmlGen = require("./src/genHTML");
const cssResetGen = require("./src/getCSSreset");
const Engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const Manager = require("./lib/manager");

function questions() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the teams name?",
      name: "startingTeamName",
    },
  ]);
}
