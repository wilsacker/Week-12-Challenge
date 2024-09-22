const pool = require('./connection');

class DB {
  // fetch all employees
  async findAllEmployees() {
    return pool.query(
      `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary 
       FROM employee 
       LEFT JOIN role ON employee.role_id = role.id 
       LEFT JOIN department ON role.department_id = department.id;`
    );
  }

  // create a new employee
  async createEmployee(first_name, last_name, role_id, manager_id) {
    return pool.query(
      'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', 
      [first_name, last_name, role_id, manager_id]
    );
  }
  
  // Fetch all roles
  async findAllRoles() {
    return pool.query(
      `SELECT role.id, role.title, department.name AS department, role.salary 
      FROM role 
      JOIN department ON role.department_id = department.id;`
    );
  }

  // Create a new role
  async createRole(title, salary, department_id) {
    return pool.query(
      'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', 
      [title, salary, department_id]
    );
  }

  // Delete a role
  async removeRole(roleId) {
    return pool.query('DELETE FROM role WHERE id = $1', [roleId]);
  }

  // Update an existing role (e.g., change the title or salary)
  async updateRole(roleId, title, salary, department_id) {
    return pool.query(
      'UPDATE role SET title = $1, salary = $2, department_id = $3 WHERE id = $4',
      [title, salary, department_id, roleId]
    );
  }

  async findAllDepartments() {
    return pool.query('SELECT * FROM department');
  }

  async findAllEmployees() {
    return pool.query(`
      SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary 
      FROM employee 
      JOIN role ON employee.role_id = role.id 
      JOIN department ON role.department_id = department.id;
    `);
  }
}

module.exports = new DB();