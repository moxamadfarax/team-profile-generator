const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }
  getOfficeNumber() {
    console.log(this.officeNumber);
    return this.officeNumber;
  }
  getRole() {
    console.log(this.role);
    return this.role;
  }
}

module.exports = Manager;

let test = new Manager("Garrett", 2, "email@email.com", 5);
console.log(test);
