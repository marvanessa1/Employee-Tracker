// const db = require('../db');

// const { 
//     seeDepartments,
//     seeEmployees, 
//     seeRoles, 
//     addDepartment,
//     addRole,
//     addEmployee,
//     employeeUpdate 
// } = require('../db');

// async function getEmployees() {
//     db.seeEmployees().then(([employees])=> {
//         const employeeChoices = employees.map (({first_name, last_name, id})=> ({
//             name:`${first_name} ${last_name}`,
//             value: id
//         }))
//     })
    
// }

// async function getRoles() {
//     db.seeRoles().then(([roles])=> {
//         const roleChoices = roles.map (({title, id})=> ({
//             name:`${first_name} ${last_name}`,
//             value: id
//         }))
//     })
    
// }

// module.exports = {
//     getEmployees,
//     getRoles
// };