const inquirer = require('inquirer');
const table = require('console.table');
const db = require('./db');
const { 
    seeDepartments,
    seeEmployees, 
    seeRoles, 
    addDepartment,
    addRole,
    addEmployee,
    employeeUpdate 
} = require('./db');

// const { getEmployees, getRoles} = require('./helpers/choices')

// initial user prompt choices, list of actions available
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

// initial user prompt, asking user what action they would like to do.  askFunction will be repreated after each action chosen
function askAction() {
    inquirer.prompt(actions).then((res) => {
        // switch case is used to evaluate users action prompt choice to determine which function code will be excecuted 
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
    // .promie function on connection 
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
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the department?",
            name: "newDepartment"
        }
    ])
        .then((res) => {
            const departmentName = res.newDepartment
            let newDepartment = { name: departmentName };
            db.addDepartment(newDepartment).then(() =>
                console.log(`${departmentName} was successfully added to departments`))
                .then(() => askAction());
        })
}

// Add a role - CREATE
async function createRole() {
    inquirer.prompt([
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

            db.seeDepartments().then(([data]) => {
                const options = data.map(({ id, name }) => ({
                    name: name,
                    value: id,
                }))
                inquirer.prompt([
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
                        db.addRole(newRole).then(() =>
                            console.log(`${name} was successfully added to roles`))
                            .then(() => askAction());
                    })
            })

        })
};

// Addd an employee - CREATE
async function createEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is first name of the employee?",
            name: "first_name"
        },
        {
            type: "input",
            message: "What is last name of the employee?",
            name: "last_name"
        }
    ])
        .then((res) => {
            const first_name = res.first_name;
            const last_name = res.last_name;

            db.seeRoles().then(([roles]) => {
                const choices = roles.map(({ id, title }) => ({
                    name: title,
                    value: id
                }));

                inquirer.prompt(
                    {
                        type: "list",
                        message: "What is the role of the employee?",
                        choices: choices,
                        name: "role_id"
                    }
                )
                    .then((res) => {
                        const role_id = res.role_id;

                        db.seeEmployees().then(([employees]) => {
                            const addManager = employees.map(
                                ({ id, first_name, last_name }) => ({
                                    name: `${first_name} ${last_name}`,
                                    value: id
                                })
                            );
                            addManager.unshift({ name: "NONE", value: null });

                            inquirer.prompt([
                                {
                                    type: "list",
                                    message: "Who is the manager of the employee?",
                                    choices: addManager,
                                    name: "manager_id"
                                }
                            ])
                                .then((res) => {
                                    let storeEmployee = {
                                        first_name: first_name,
                                        last_name: last_name,
                                        role_id: role_id,
                                        manager_id: res.manager_id
                                    };
                                    db.addEmployee(storeEmployee).then(() =>
                                        console.log(`${first_name} ${last_name} was successfully added to employees!`)).then(() =>
                                            askAction());
                                })
                        })
                    })
            })
        })
}

async function updateEmployeeRole() {    
    db.seeEmployees().then(([employees])=> {
        const employeeChoices = employees.map(({ 
            first_name,
            last_name,
            id
        }) => ({
            name: `${first_name} ${last_name}`,
            value: id
        }))
        inquirer.prompt(
            {
                type: "list",
                message: "Which employee's role would you like to update?",
                choices: employeeChoices,
                name: "employee_id"
            }
        )
        .then((res) => {
            employee_id = res.employee_id;
        })
        db.seeRoles().then(([roles])=> {
            const roleChoices = roles.map(({ id, title})=> ({
                name: title,
                value: id
            }))
            inquirer.prompt(
                {
                    type: "list",
                    message: "What is the updated role of the employee?",
                    choices: roleChoices,
                    name: "role_id"
                }
            )
                .then((res) =>{
                    let updateRole = {
                        role_id: res.role_id,
                        employee_id: employee_id
                    }
                    db.employeeUpdate(updateRole).then(()=>console.log(`The role of the employee was successfully updated`)).then(()=>askAction())
                })
        })
    })


}

askAction();