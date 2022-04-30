const { query } = require('./connection')
const connection = require('./connection')

class DB {
    constructor(connection){
        this.connection = connection
    }

    seeDepartments(){
        return this.connection.promise().query('SELECT * FROM department');
    }
}

module.exports = new DB(connection);