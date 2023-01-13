const Employee = require("../lib/employee");

test("Name can be set", () => {
  const name = "Mohamed";
  const newEmployee = new Employee(name);
  expect(newEmployee.name).toEqual(name);
});
test("Id can be set", () => {
  const id = "3321";
  const newEmployee = new Employee("Mohamed", id);
  expect(newEmployee.id).toEqual(id);
});
test("Email can be set", () => {
  const email = "mohamedfarah0508@gmail.com";
  const newEmployee = new Employee("Mohamed", 3321, email);
  expect(newEmployee.email).toEqual(email);
});
test("Can get name with getname()", () => {
  const name = "Mohamed";
  const newEmployee = new Employee(name);
  expect(newEmployee.getName()).toEqual(name);
});
test("Can get id with getId()", () => {
  const id = 3321;
  const newEmployee = new Employee("Mohamed", 3321);
  expect(newEmployee.getId()).toEqual(id);
});
test("Can get email with getEmail()", () => {
  const email = 3321;
  const newEmployee = new Employee("mohamedfarah0508@gmail.com", 3321, email);
  expect(newEmployee.getEmail()).toEqual(email);
});
test("Can return role with getRole()", () => {
  const role = "Employee";
  const newEmployee = new Employee();
  expect(newEmployee.getRole()).toEqual(role);
});
