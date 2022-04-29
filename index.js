const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = require('./db/connection');
const { listenerCount } = require('./db/connection');



// Present user with options

async function inquire(){
    const answers = await inquirer 
        .prompt([
            {
                type: "list",
                name: "action",
                message: "What would you like to do?",
                choices: [
                    {name: "View All Departments", value: 1},
                    {name: "View All Roles", value: 2},
                    {name: "View All Employess", value: 3},
                    {name: "Add a department", value: 4},
                    {name: "Add a role", value: 5},
                    {name: "Add an employee", value: 6},
                    {name: "Update an employee role", value: 7},
                ]
            }
        ])
        .then((answers) => {
            answers.action();
        });
};

// View all departments - READ - "SELECT * FROM [table_name]";
async function viewAllDepartments(){

};

// View all roles - READ - "SELECT * FROM [table_name]";

// View all employees - READ - "SELECT * FROM [table_name]";

async function viewAllEmployees(){

    const employees = await db.query('SELECT * FROM employee');

    console.table(employees);

};

// Add a department - CREATE - "INSERT INTO [table_name] (col1, col2) VALUE (value1, value2)"

// Add a role - CREATE - 
async function createRole(){
    // SELECT the existing department out for the 'departments' table

    const departments = [
        {
            id: 1,
            name: "Executive"
        },
        {
            id: 2,
            name: "Transfiguration"
        },
        {
            id: 3,
            name: "Charms"
        },
        {
            id: 4,
            name: "Potions"
        },
        {
            id: 5,
            name: "History of Magic"
        },
        {
            id: 6,
            name: "Defence Against the Dark Arts"
        },
        {
            id: 7,
            name: "Astronomy"
        },
        {
            id: 8,
            name: "Herbology"
        },
        {
            id: 9,
            name: "Divination"
        },
        {
            id: 10,
            name: "Care of Maginal Creatures"
        },
    ]

      // .map() the resulds from 'department' to question data for inquirer

    const choices = department.map (department => {
        return {
            name: department.name,
            value: department.id
        }
    })
      
    const answers = await inquirer
    .prompt([
       { 
        type:"list",
        name: "department_id",
        messsage: "Select a department",
        choices: choices
        }
    ])
    .then((answers) =>{
        console.log(answers);
    })
       // Take the user's answers and go INSERT them into the 'role table'
}



// Add an employee - CREATE - 

// Update an employee