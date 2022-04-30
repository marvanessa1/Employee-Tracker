// const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = require('./db/connection');

// const { listenerCount } = require('./db/connection');



// Present user with options

async function inquire() {
    const answer = await inquirer
        .prompt(
            {
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
                ]
            }
        );
        if (answer.options === "View All Departments") {
            viewAllDepartments();
        } else if (answer.options === "View All Roles"){
            viewAllRoles();
        }else if (answer.options === "View All Employees"){
            viewAllEmployees();
        }else if (answer.options === "Add a department"){
            createDepartment();
        }else if (answer.options === "Add a role"){
            createRole();
        }else if (answer.options === "Add an employee"){
            createEmployee();
        }else if (answer.options === "Update an employee role"){
            updateEmployeeRole();
        }
};

// View all departments - READ - "SELECT * FROM [table_name]";
async function viewAllDepartments() {

};

// View all roles - READ - "SELECT * FROM [table_name]";

async function viewAllRoles() {

};


// View all employees - READ - "SELECT * FROM [table_name]";

async function viewAllEmployees() {

    const employees = await db.query('SELECT * FROM employee');

    console.table(employees);

};

// Add a department - CREATE - "INSERT INTO [table_name] (col1, col2) VALUE (value1, value2)"

async function createDepartment() {

}

// Add a role - CREATE - 
async function createRole() {
    // SELECT the existing department out for the 'departments' table

    const department = await db.query.map((department) => {
        return {
            name: department.name,
            value: department.id
        };
    });

    // .map() the resulds from 'department' to question data for inquirer

    const choices = department.map(department => {
        return {
            name: department.name,
            value: department.id
        }
    })

    const answer = await inquirer
        .prompt([
            {
                type: "list",
                name: "department_id",
                messsage: "Select a department",
                choices: choices
            }
        ])
        .then((answer) => {
            console.log(answer);
        })
    // Take the user's answer and go INSERT them into the 'role table'
}



// Add an employee - CREATE - 

async function createEmployee() {

}

// Update an employee

async function updateEmployeeRole() {

}