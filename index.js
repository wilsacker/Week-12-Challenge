const figlet = require('figlet');
const boxen = require('boxen');
const inquirer = require('inquirer');  // For the command-line menu
const { viewEmployees, addEmployee, updateEmployeeRole, viewRoles, addRole, viewDepartments, addDepartment } = require('./db/index');

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

// Initialize the app
showBanner();