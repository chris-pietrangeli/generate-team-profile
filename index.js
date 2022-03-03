const inquirer = require('inquirer');
const fs = require('fs');

const employees = [];

typeOfEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'What is the Employee role?',
            name: 'role',
            choices: [
                'Engineer',
                'Intern'
            ],
        }
    ]).then(choice => {
        if (choice.role === 'Engineer') {
            addEngineer();
        }
        else {
            addIntern();
        }
    })
};

addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Engineers name?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Engineers employee ID',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Engineers email address',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Engineers github user name',
            name: 'github'
        }
    ]).then((engineerResults) => {
        engineerResults.role = 'Engineer';
        const { name, id, email, github, role } = engineerResults;
        const newEngineer = new Engineer(name, id, email, github, role);
        employees.push(newEngineer);
        addEmployee();
    });
};

addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Interns name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Intern employee ID',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Interns email address',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Interns school',
            name: 'school'
        }
    ]).then((internResults) => {
        internResults.role = 'Intern';
        const { name, id, email, school, role } = internResults;
        const newIntern = new Intern(name, id, email, school, role);
        employees.push(newIntern);
        addEmployee();
    });
};

addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Add another team member?',
            name: 'add',
            choices: [
                'Yes',
                'No'
            ],
        }
    ]).then(choice => {
        if (choice.add === 'Yes') {
            typeOfEmployee();
        }
        else {
            renderHtml();
        }
    });
};

init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the team managers name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Manager employee ID',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is the managers email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Manager phone number',
            name: 'phoneNumber'
        }
    ]).then((managerResults) => {
        managerResults.role = 'Manager';
        const { name, id, email, phoneNumber, role } = managerResults;
        const newManager = new Manager(name, id, email, phoneNumber, role);
        employees.push(newManager);
        typeOfEmployee();
    })
};

renderHtml = () => {
    const buildHtml = render(employees);
    fs.writeFile(outputPath, buildHtml, (err) => {
        if (err) {
            return console.log(err);
        }
        else {
            return console.log('Your team has been created! Check it out!');
        }
    })
};

init();