
   
const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./Develop/lib/htmlRenderer");

const employees = [];

employeeType = () => {
    console.log("What is your employee's role?");
    return inquirer.prompt([
        {
            type: "list",
            message: "What is your Employee's role?",
            name: "role",
            choices: [
                'Engineer',
                'Intern'
            ],
        }
    ]).then(choice => {
        if (choice.role === 'Engineer') {
            addEngineer();
        } else {
            addIntern();
        }
    })
};

addEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the Engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your engineer's employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "What is your engineer's email address:",
            name: "email"
        },
        {
            type: "input",
            message: "What is your engineer's github user name:",
            name: "github"
        }
    ]).then((engineerResults) => {
        engineerResults.role = "Engineer";
        const { name, id, email, github, role } = engineerResults;
        const newEngineer = new Engineer(name, id, email, github, role);
        employees.push(newEngineer);
        addEmployee();
    });
};

addIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your Intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your intern's employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "What is your intern's email address:",
            name: "email"
        },
        {
            type: "input",
            message: "What is your intern's school:",
            name: "school"
        }
    ]).then((internResults) => {
        internResults.role = "Intern";
        const { name, id, email, school, role } = internResults;
        const newIntern = new Intern(name, id, email, school, role);
        employees.push(newIntern);
        addEmployee();
    });
};

addEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "Do you want to add another team member?",
            name: "add",
            choices: [
                "Yes",
                "No"
            ],
        }
    ]).then(choice => {
        if (choice.add === "Yes") {
            employeeType();
        } else {
            renderHtml();
        };
    });
};

init = () => {
    console.log("Create your team!");
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the Manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your manager's employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "What is your manager's email address:",
            name: "email"
        },
        {
            type: "input",
            message: "What is your manager's office number:",
            name: "officeNumber"
        },
    ]).then((managerResults) => {
        managerResults.role = "Manager";
        const { name, id, email, officeNumber, role } = managerResults;
        const newManager = new Manager(name, id, email, officeNumber, role);
        employees.push(newManager);
        employeeType();
    })
};

renderHtml = () => {
    const buildHTML = render(employees);
    fs.writeFile(outputPath, buildHTML, (err) => {
        if (err) {
            return console.log(err);
        } else {
            return console.log("Your team was created! Checkout the output folder")
        };
    })
};

init();