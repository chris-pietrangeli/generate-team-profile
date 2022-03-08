const Intern = require("../lib/Intern");

test("Can set the school value", () => {
  const test = "ASU";
  const i = new Intern("jack", 67, "jack@gmail.com", test);
  expect(i.school).toBe(test);
});

test("getRole() to return intern", () => {
  const test = "Intern";
  const i = new Intern("bill", 89, "bill@gmail.com", "ASU");
  expect(i.getRole()).toBe(test);
});

test("Can get school", () => {
  const test = "ASU";
  const i = new Intern("jeremy", 77, "jeremy@gmail.com", test);
  expect(i.getSchool()).toBe(test);
});