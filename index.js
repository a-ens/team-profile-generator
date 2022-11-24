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
            message: 'Name the team manager'
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
            message: 'Enter manager ID'
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
            message: 'Enter manager ID'
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

