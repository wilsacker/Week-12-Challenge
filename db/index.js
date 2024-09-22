const pool = require('./connection');

class DB {
  async findAllEmployees() {
    return pool.query(
      `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary 
       FROM employee 
       LEFT JOIN role ON employee.role_id = role.id 
       LEFT JOIN department ON role.department_id = department.id;`
    );
  }

  async createEmployee(first_name, last_name, role_id, manager_id) {
    return pool.query(
      'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', 
      [first_name, last_name, role_id, manager_id]
    );
  }

  // Similar methods for other operations (e.g., findAllRoles, createRole, etc.)
}

module.exports = new DB();