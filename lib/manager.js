const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
    this.role = "Manager";
  }
  getOfficeNum() {
    console.log(this.officeNum);
    return this.officeNum;
  }
  getRole() {
    console.log(this.role);
    return this.role;
  }
}

module.exports = Manager;
