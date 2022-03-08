const Employee = require("../lib/Employee");

test("Can create an employee", () => {
  const i = new Employee();
  expect(typeof(i)).toBe("object");
});

test("Can set a name", () => {
  const name = "Alice";
  const i = new Employee(name);
  expect(i.name).toBe(name);
});

test("Can set an ID", () => {
  const test = 97;
  const i = new Employee("chris", test);
  expect(i.id).toBe(test);
});

test("Can set an email", () => {
  const test = "chris@employee.com";
  const i = new Employee("chris", 77, test);
  expect(i.email).toBe(test);
});

test("Can get the name", () => {
  const test = "James";
  const i = new Employee(test);
  expect(i.getName()).toBe(test);
});

test("Can get the id", () => {
  const test = 68;
  const i = new Employee("chris", test);
  expect(i.getId()).toBe(test);
});

test("Can get the email", () => {
  const test = "chris@testing.com";
  const i = new Employee("christopher", 56, test);
  expect(i.getEmail()).toBe(test);
});

test("getRole() to return employee", () => {
  const test = "Employee";
  const i = new Employee("Jack", 21, "jack@gmail.com");
  expect(i.getRole()).toBe(test);
});