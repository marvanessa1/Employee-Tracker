const { query } = require('./connection')
const connection = require('./connection')

class DB {
    constructor(connection){
        this.connection = connection
    }

    seeDepartments(){
        return this.connection.promise().query('SELECT * FROM department');
    }

    seeRoles(){
        return this.connection.promise().query('SELECT * FROM role');
    }

    seeEmployees(){
        return this.connection.promise().query('SELECT * FROM employee');
    }

    addDepartment(department) {
        return this.connection.promise().query('INSERT INTO department set ?', department);
    }
}

module.exports = new DB(connection);