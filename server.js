const inquirer = require('inquirer');
const table = require('console.table');
const db = require('./db');

const actions = [{
    type: "list",
    name: "action",
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
    name: "actions",
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

};


// View all employees - READ - "SELECT * FROM [table_name]";

async function viewAllEmployees() {

};

// Add a department - CREATE - "INSERT INTO [table_name] (col1, col2) VALUE (value1, value2)"

async function createDepartment() {

}


async function createRole() {

}

async function createEmployee() {

}

async function updateEmployeeRole() {

}

askAction();