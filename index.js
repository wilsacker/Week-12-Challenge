const inquirer = require('inquirer');  // For the command-line menu
const figlet = require('figlet');
const boxen = require('boxen');
const db = require('./db');  // Import DB class

// Display banner and start menu
function showBanner() {
  figlet('Employee Manager', (err, data) => {
    if (err) {
      console.log('Something went wrong with figlet...');
      console.dir(err);
      return;
    }

    // Create a box around the banner
    const boxedBanner = boxen(data, {
      padding: 1,
      margin: 1,
      borderStyle: 'double',
      borderColor: 'cyan',
    });

    console.log(boxedBanner);

    // Start the menu AFTER the banner is displayed
    init();
  });
}

// Menu function
function init() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'View All Employees',
          'Add Employee',
          'Update Employee Role',
          'View All Roles',
          'Add Role',
          'View All Departments',
          'Add Department',
          'Exit'
        ],
      },
    ])
    .then((answer) => {
      switch (answer.action) {
        case 'View All Employees':
          viewEmployees();
          break;
        case 'Add Employee':
          addEmployee();
          break;
        case 'Update Employee Role':
          updateEmployeeRole();
          break;
        case 'View All Roles':
          viewRoles();
          break;
        case 'Add Role':
          addRole();
          break;
        case 'View All Departments':
          viewDepartments();
          break;
        case 'Add Department':
          addDepartment();
          break;
        case 'Exit':
          console.log('Goodbye!');
          process.exit();
      }
    });
}

// View all employees
async function viewEmployees() {
  try {
    const res = await pool.query(`
      SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, employee.manager_id
      FROM employee
      JOIN role ON employee.role_id = role.id
      JOIN department ON role.department_id = department.id
    `);
    console.table(res.rows);
    init();  // Return to the menu
  } catch (err) {
    console.error('Error retrieving employees:', err);
  }
}

// Add employee
async function addEmployee() {
  const answers = await inquirer.prompt([
    { name: 'first_name', type: 'input', message: 'Enter employee first name:' },
    { name: 'last_name', type: 'input', message: 'Enter employee last name:' },
    { name: 'role_id', type: 'input', message: 'Enter employee role ID:' },
    { name: 'manager_id', type: 'input', message: 'Enter employee manager ID (if any):' }
  ]);

  try {
    const res = await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [answers.first_name, answers.last_name, answers.role_id, answers.manager_id || null]);
    console.log(`Added employee: ${answers.first_name} ${answers.last_name}`);
    init();  // Return to the menu
  } catch (err) {
    console.error('Error adding employee:', err);
  }
}

// Update employee role
async function updateEmployeeRole() {
  const answers = await inquirer.prompt([
    { name: 'employee_id', type: 'input', message: 'Enter employee ID to update:' },
    { name: 'new_role_id', type: 'input', message: 'Enter new role ID for the employee:' }
  ]);

  try {
    const res = await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2', [answers.new_role_id, answers.employee_id]);
    console.log(`Updated employee's role.`);
    init();  // Return to the menu
  } catch (err) {
    console.error('Error updating employee role:', err);
  }
}

// View all roles
async function viewRoles() {
  try {
    const res = await pool.query(`
      SELECT role.id, role.title, department.name AS department, role.salary 
      FROM role 
      JOIN department ON role.department_id = department.id
    `);
    console.table(res.rows);
    init();  // Return to the menu
  } catch (err) {
    console.error('Error retrieving roles:', err);
  }
}

// Add role
async function addRole() {
  const answers = await inquirer.prompt([
    { name: 'title', type: 'input', message: 'Enter role title:' },
    { name: 'salary', type: 'input', message: 'Enter role salary:' },
    { name: 'department_id', type: 'input', message: 'Enter department ID for the role:' }
  ]);

  try {
    const res = await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [answers.title, answers.salary, answers.department_id]);
    console.log(`Added role: ${answers.title}`);
    init();  // Return to the menu
  } catch (err) {
    console.error('Error adding role:', err);
  }
}


// View all departments
async function viewDepartments() {
  try {
    const res = await pool.query('SELECT * FROM department');
    console.table(res.rows);  // Display the result in a table format
    init();  // Call init to return to the menu
  } catch (err) {
    console.error('Error retrieving departments:', err);
  }
}

async function addDepartment() {
  const answer = await inquirer.prompt({
    name: 'name',
    type: 'input',
    message: 'Enter the name of the department:',
  });

  try {
    const res = await pool.query('INSERT INTO department (name) VALUES ($1)', [answer.name]);
    console.log(`Added department: ${answer.name}`);
    init();  // Return to the main menu
  } catch (err) {
    console.error('Error adding department:', err);
  }
}

// Initialize the app
showBanner();