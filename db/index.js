const { query } = require('./connection')
const connection = require('./connection')

class db {
    constructor(connection) {
        this.connection = connection
    }

    seeDepartments() {
        return this.connection.promise().query('SELECT * FROM department');
    }

    seeRoles() {
        return this.connection.promise().query('SELECT * FROM role');
    }

    seeEmployees() {
        return this.connection.promise().query('SELECT * FROM employee');
    }

    addDepartment(department) {
        return this.connection.promise().query('INSERT INTO department set ?', department);
    }

    addRole(role) {
        return this.connection.promise().query('INSERT INTO role set ?', role);
    }

    addEmployee(employee) {
        return this.connection.promise().query('INSERT INTO employee set ?', employee);
    }
    employeeUpdate(update) {
        return this.connection.promise().query('UPDATE employee set role_id = ? WHERE role_id = ?;', update)
    }
}

module.exports = new db(connection);