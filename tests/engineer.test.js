const Engineer = require("../lib/engineer");

test("Can return role with getRole()", () => {
  const role = "Engineer";
  const newEngineer = new Engineer();
  expect(newEngineer.getRole()).toEqual(role);
});
test("Can return github with gitHub()", () => {
  const github = "moxamedfarax";
  const newEngineer = new Engineer(
    "Mohamed",
    3321,
    "mohamedfarah0508@gmail.com",
    github
  );
  expect(newEngineer.getGithub()).toEqual(github);
});
