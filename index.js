const figlet = require('figlet');
const boxen = require('boxen');
const inquirer = require('inquirer');  // For the command-line menu
const { viewDepartments } = require('./db/index');  // Import your functions from db/index.js

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
        case 'View all departments':
          viewDepartments();
          break;
        // Add cases for other actions as you build them.
        case 'Exit':
          console.log('Goodbye!');
          process.exit();
      }
    });
}

// Initialize the app
showBanner();