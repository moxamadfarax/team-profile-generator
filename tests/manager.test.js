const Manager = require("../lib/manager");

test("Can return role with getRole()", () => {
  const role = "Manager";
  const newManager = new Manager();
  expect(newManager.getRole()).toEqual(role);
});
test("Can return office Number with getOfficeNum()", () => {
  const officeNum = 445;
  const newManager = new Manager(
    "Mohamed",
    3321,
    "mohamedfarah0508@gmail.com",
    officeNum
  );
  expect(newManager.getOfficeNum()).toEqual(officeNum);
});
