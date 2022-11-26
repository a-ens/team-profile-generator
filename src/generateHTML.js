// creating Manager card
const createManagerEl = function (manager) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header bg-info">
            ${manager.name}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${engineer.name}</li>
            <li class="list-group-item">email: ${engineer.email}</li>
            <li class="list-group-item">github: ${engineer.github}</li>
        </ul>
    </div>
    `
};

const createEngineerEl = function (engineer) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header bg-info">
            
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${engineer.name}</li>
            <li class="list-group-item">email: ${engineer.email}</li>
            <li class="list-group-item">github: ${engineer.github}</li>
        </ul>
    </div>
    `
};

const createInternEl = function (intern) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header bg-info">
            ${intern.role}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${intern.name}</li>
            <li class="list-group-item">email: ${intern.email}</li>
            <li class="list-group-item">github: ${intern.github}</li>
        </ul>
    </div>
    `
};

generateHTML = (data) => {

    // array for Employee Elements
    employeesArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        // Sort employees according to their roles and generate Elements accordingly
        if (role === 'Manager') {
            const managerCard = createManagerEl(employee);
            teamArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = createEngineerEl(employee);
            teamArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = createInternEl(employee);
            teamArray.push(internCard);
        }
    
    }

    const employeeEls = employeesArray.join('')

    const groupTeam = generatePage(employeeEls);

    return groupTeam
};


const generatePage = function (employeeEls) {
    return `
    
    
    `
};

module.exports = generateHTML; 