const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: '',
    database: 'employees_db'
});

connection.connect(function (err){
    if (err) {
        throw err;
    } else {
        console.log('Successfully connected to mysql')
    }
})

module.exports = connection;