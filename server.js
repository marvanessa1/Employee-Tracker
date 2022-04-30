const inquirer = require('inquirer');
const table = require('console.table');
const db = require('./db');

const actions = [{
    type: "list",
    name: "actions",
    message: "What would you like to do?",
    choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
    ],
}]

function askAction() {
    inquirer.prompt(actions).then((res) => {
        switch (res.actions) {
            case "View All Departments":
                viewAllDepartments();
                break;

            case "View All Roles":
                viewAllRoles();
                break;

            case "View All Employees":
                viewAllEmployees();
                break;

            case "Add a department":
                createDepartment();
                break;

            case "Add a role":
                createRole();
                break;

            case "Add an employee":
                createEmployee();
                break;

            case "Update an employee role":
                updateEmployeeRole();
                break;
        }
    })
}



// View all departments - READ - "SELECT * FROM [table_name]";
function viewAllDepartments() {
    db.seeDepartments()
        .then(([departments]) => {
            console.table(departments)
        })
        .then(() => askAction());
};

// View all roles - READ - "SELECT * FROM [table_name]";

async function viewAllRoles() {
    db.seeRoles()
    .then(([roles]) => {
        console.table(roles)
    })
    .then(() => askAction());
};


// View all employees - READ - "SELECT * FROM [table_name]";

async function viewAllEmployees() {
    db.seeEmployees()
    .then(([employees]) => {
        console.table(employees)
    })
    .then(() => askAction());
};

// Add a department - CREATE - "INSERT INTO [table_name] (col1, col2) VALUE (value1, value2)"

async function createDepartment() {
    inquirer .prompt([
        {
            type: "input",
            message: "What is the name of the department?",
            name: "newDepartment"
        }
    ])
    .then((res) => {
        const departmentName = res.newDepartment
        let newDepartment = { name: departmentName};
        db.addDepartment(newDepartment).then(() => 
            console.log(`${departmentName} was successfully added to departments`))
        .then(() => askAction());
    })
}


async function createRole() {
    inquirer .prompt([
        {
            type: "input",
            message: "What is the name of the role?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the salary of the role?",
            name: "salary"
        }
    ])
    .then((res) => {
        const name = res.name
        const salary = res.salary;

        db.seeDepartments().then(([data])=> {
            const options = data.map(({id, name})=> ({
                name: name,
                value: id,
            }))
            inquirer .prompt ([
                {
                    type: "list",
                    message: "In which department does this role belong in?",
                    choices: options,
                    name: "department_id",
                }
            ])
            .then((res) => {
                let newRole = {
                    title: name,
                    salary: salary,
                    department_id: res.department_id,
                };
                db.addRole(newRole).then(()=>
                console.log(`${name} was successfully added to roles`))
                .then(() => askAction());
            })
        })

    })
};

async function createEmployee() {

}

async function updateEmployeeRole() {

}

askAction();