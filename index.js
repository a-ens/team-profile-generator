// generating HTML
const generateHTML = require('./src/generateHTML');

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// node
const fs = require('fs');
const inquirer = require('inquirer');

// team
const teamArray = [];

// manager prompts
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Name the team manager',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Invalid Name");
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter manager ID',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ("Invalid ID");
                    return false;
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `Enter manager's email`,
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true
                } else {
                    console.log ("Invalid email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter manager ID',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ("Invalid Office Number");
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Choose a role for this Employee',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Employee Name', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Invalid employee name');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the employee ID',
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter a valid employee ID')
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `Enter manager's email`,
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true
                } else {
                    console.log ("Invalid email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: `Please enter the employee's github username.`,
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter a valid employee github username")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: `Please enter the intern's school`,
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter a valid school for this intern')
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddingEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        // data for employee types 

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })
};

const createFile = data => {
    fs.createFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err)
            return;
        } else {
            console.log('Successfully created a team profile!')
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return createFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });