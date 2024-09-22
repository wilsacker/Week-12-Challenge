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
  
  // fetch all roles
  async findAllRoles() {
    return pool.query(
      `SELECT role.id, role.title, department.name AS department, role.salary 
      FROM role 
      JOIN department ON role.department_id = department.id;`
    );
  }
  
  // fetch all departments
  async findAllDepartments() {
    return pool.query('SELECT * FROM department');
  }

  // create a new employee
  async createEmployee(first_name, last_name, role_id, manager_id) {
    return pool.query(
      'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', 
      [first_name, last_name, role_id, manager_id]
    );
  }

  // Create a new role
  async createRole(title, salary, department_id) {
    return pool.query(
      'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', 
      [title, salary, department_id]
    );
  }

  // createDepartment
  async createDepartment(name) {
    return pool.query('INSERT INTO department (name) VALUES ($1)', [name]);
  }

  // update employee role
  async updateEmployeeRole(employee_id, role_id) {
    return pool.query('UPDATE employee SET role_id = $1 WHERE id = $2', [role_id, employee_id]);
  }
  
  // Update an existing role (e.g., change the title or salary)
  async updateRole(roleId, title, salary, department_id) {
    return pool.query(
      'UPDATE role SET title = $1, salary = $2, department_id = $3 WHERE id = $4',
      [title, salary, department_id, roleId]
    );
  }

  // remove employee
  async removeEmployee(employee_id) {
    return pool.query('DELETE FROM employee WHERE id = $1', [employee_id]);
  }

  // Delete a role
  async removeRole(roleId) {
    return pool.query('DELETE FROM role WHERE id = $1', [roleId]);
  }

  // remove department
  async removeDepartment(department_id) {
    return pool.query('DELETE FROM department WHERE id = $1', [department_id]);
  }
}

module.exports = new DB();