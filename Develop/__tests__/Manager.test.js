const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number", () => {
  const test = 65;
  const i = new Manager("harry", 65, "harry@gmail.com", test);
  expect(i.officeNumber).toBe(test);
});

test('getRole() to return manager', () => {
  const test = "Manager";
  const i = new Manager("bryan", 68, "bryan@gmail.com", 55);
  expect(i.getRole()).toBe(test);
});

test("Can get office numbers", () => {
  const test = 623;
  const i = new Manager("blake", 33, "blake@gmail.com", test);
  expect(i.getOffice()).toBe(test);
});