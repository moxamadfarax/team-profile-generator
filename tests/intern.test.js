const Intern = require("../lib/intern");

test("Can return role with getRole()", () => {
  const role = "Intern";
  const newIntern = new Intern();
  expect(newIntern.getRole()).toEqual(role);
});
test("Can return school with getSchool()", () => {
  const school = "University Of Minnesota";
  const newIntern = new Intern(
    "Mohamed",
    3321,
    "mohamedfarah0508@gmail.com",
    school
  );
  expect(newIntern.getSchool()).toEqual(school);
});
