// creating Manager card
const createManagerEl = function (manager) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header bg-info">
            ${manager.name}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item id">ID: ${manager.id}</li>
            < class="list-group-item email">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item office">github: ${manager.github}</li>
        </ul>
    </div>
    `
};

const createEngineerEl = function (engineer) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header bg-info">
            ${engineer.role}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${engineer.email}</a></li>
            <li class="list-group-item">Office Number: ${engineer.officeNumber}</li>
        </ul>
    </div>
    `
};

const createInternEl = function (intern) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header bg-info">
            ${intern.name}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
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
            const managerEl = createManagerEl(employee);
            employeesArray.push(managerEl);
        }

        if (role === 'Engineer') {
            const engineerEl = createEngineerEl(employee);
            employeesArray.push(engineerEl);
        }

        if (role === 'Intern') {
            const internEl = createInternEl(employee);
            employeesArray.push(internEl);
        }
    
    }
    // creating a string of all employees
    const employeeEls = employeesArray.join('')

    const generatedTeam = generatePage(employeeEls);

    return generatedTeam
};


const generatePage = function (employeeEls) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header class="d-flex flex-wrap align-content-center justify-content-center border-bottom bg-success">
            <div class="">
                <h4 class="align-items-center justify-content-center text-light padding-md">Team Profile</h4>
            </div>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards-div">
                ${employeeEls}
                </div>
            </div>
        </main>
    
        <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    </body>
    </html>
    `
};

module.exports = generateHTML; 