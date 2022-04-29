const mysql = require('mysql2');

const db = require('./db/connection');
// Present user with options

// View all departments - READ - "SELECT * FROM [table_name]";
function viewAllDepartments(){

};

// View all roles - READ - "SELECT * FROM [table_name]";

// View all employees - READ - "SELECT * FROM [table_name]";

// Add a department - CREATE - "INSERT INTO [table_name] (col1, col2) VALUE (value1, value2)"

// Add a role - CREATE - 

    // SELECT the excisting roles out for the 'roles' table

    // .map() the resulds from 'roles' to question data for inquirer

    // THEN prompt the user for role information (inquirer)

        // Take the user's answers and go INSERT them into the 'role table'

// Add an employee - CREATE - 

// Update an employee