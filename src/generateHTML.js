// creating Manager card
const createManagerEl = function (manager) {
    return `
    
    
    
    
    
    `;
}

const createEngineerEl = function (engineer) {
    return `




    `;
}

const createInternEl = function (intern) {
    return `
    
    
    
    
    `;
}

generateHTML = (data) => {

    // array for Employee Elements
    employeesArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        // Sort employees according to their roles and generate Elements accordingly
        if (role === 'Manager') {
            const managerCard = createManagerEl(employee);
            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = createEngineerEl(employee);
            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = createInternEl(employee);
            pageArray.push(internCard);
        }
    
    }


    const employeeEls = employeesArray.join('')

    const groupTeam = generatePage(employeeEls);


    return groupTeam
}


const generatePage = function (employeeEls) {
    return `
    
    
    `;
}

module.exports = generateHTML; 