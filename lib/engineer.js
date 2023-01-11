const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
    this.role = "Engineer";
  }
  getGithub() {
    console.log(this.gitHub);
    return this.gitHub;
  }
  getRole() {
    console.log(this.role);
    return this.role;
  }
}

module.exports = Engineer;
