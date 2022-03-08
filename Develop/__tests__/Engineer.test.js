const Engineer = require("../lib/Engineer");

test("Can set the Github username", () => {
  const test = "chrisco";
  const i = new Engineer("chris", 23, "chris@gmail.com", test);
  expect(i.github).toBe(test);
});

test("getRole() to return employee", () => {
  const test = "Engineer";
  const i = new Engineer("james", 25, "james@gmail.com", "chriscos-github");
  expect(i.getRole()).toBe(test);
});

test("Can get GitHub username", () => {
  const test = "danny";
  const i = new Engineer("danny", 56, "danny@gmail.com", test);
  expect(i.getGithub()).toBe(test);
});