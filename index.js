const inquirer = require('inquirer');  // For the command-line menu
const figlet = require('figlet');
const boxen = require('boxen');
const db = require('./db');  // Import DB class

// Shows the banner first, then initializes app
showBanner();

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

function init() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: [
        {
          name: 'View All Employees',
          value: 'VIEW_EMPLOYEES',
        },
        {
          name: 'Add Employee',
          value: 'ADD_EMPLOYEE',
        },
        {
          name: 'Update Employee Role',
          value: 'UPDATE_EMPLOYEE_ROLE',
        },
        {
          name: 'View All Roles',
          value: 'VIEW_ROLES',
        },
        {
          name: 'Add Role',
          value: 'ADD_ROLE',
        },
        {
          name: 'View All Departments',
          value: 'VIEW_DEPARTMENTS',
        },
        {
          name: 'Add Department',
          value: 'ADD_DEPARTMENT',
        },
        {
          name: 'Quit',
          value: 'QUIT',
        },
      ],
    },
  ]).then((res) => {
    switch (res.choice) {
      case 'VIEW_EMPLOYEES':
        viewEmployees();
        break;
      case 'ADD_EMPLOYEE':
        addEmployee();
        break;
      case 'UPDATE_EMPLOYEE_ROLE':
        updateEmployeeRole();
        break;
      case 'VIEW_ROLES':
        viewRoles();
        break;
      case 'ADD_ROLE':
        addRole();
        break;
      case 'VIEW_DEPARTMENTS':
        viewDepartments();
        break;
      case 'ADD_DEPARTMENT':
        addDepartment();
        break;
      default:
        quit();
    }
  });
}

// View all employees
function viewEmployees() {
  db.findAllEmployees()
    .then(({ rows }) => {
      console.table(rows);
      init();  // Return to the menu
    })
    .catch((err) => console.error('Error retrieving employees:', err));
}

// Add employee
function addEmployee() {
  inquirer.prompt([
    {
      name: 'first_name',
      message: "What is the employee's first name?",
    },
    {
      name: 'last_name',
      message: "What is the employee's last name?",
    },
  ]).then((res) => {
    let firstName = res.first_name;
    let lastName = res.last_name;

    db.findAllRoles().then(({ rows }) => {
      const roleChoices = rows.map(({ id, title }) => ({
        name: title,
        value: id,
      }));

      inquirer.prompt({
        type: 'list',
        name: 'roleId',
        message: "What is the employee's role?",
        choices: roleChoices,
      }).then((res) => {
        let roleId = res.roleId;

        db.findAllEmployees().then(({ rows }) => {
          const managerChoices = rows.map(
            ({ id, first_name, last_name }) => ({
              name: `${first_name} ${last_name}`,
              value: id,
            })
          );

          managerChoices.unshift({ name: 'None', value: null });

          inquirer.prompt({
            type: 'list',
            name: 'managerId',
            message: "Who is the employee's manager?",
            choices: managerChoices,
          })
            .then((res) => {
              const employee = {
                manager_id: res.managerId,
                role_id: roleId,
                first_name: firstName,
                last_name: lastName,
              };

              db.createEmployee(employee)
                .then(() => console.log(`Added ${firstName} ${lastName} to the database`))
                .then(() => init());  // Return to main menu after adding employee
            });
        });
      });
    });
  });
}

// Update employee Role
function updateEmployeeRole() {
  db.findAllEmployees().then(({ rows }) => {
    const employeeChoices = rows.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id,
    }));

    prompt({
      type: 'list',
      name: 'employeeId',
      message: "Which employee's role do you want to update?",
      choices: employeeChoices,
    }).then((res) => {
      let employeeId = res.employeeId;

      db.findAllRoles().then(({ rows }) => {
        const roleChoices = rows.map(({ id, title }) => ({
          name: title,
          value: id,
        }));

        prompt({
          type: 'list',
          name: 'roleId',
          message: 'Which role do you want to assign to the selected employee?',
          choices: roleChoices,
        })
          .then((res) => db.updateEmployeeRole(employeeId, res.roleId))
          .then(() => console.log("Updated employee's role."))
          .then(() => init());  // Return to main menu after updating
      });
    });
  });
}

// View all roles
function viewRoles() {
  db.findAllRoles()
    .then(({ rows }) => {
      console.table(rows);
    })
    .then(() => init());  // Return to main menu after viewing roles
}

// Add Role
function addRole() {
  db.findAllDepartments().then(({ rows }) => {
    const departmentChoices = rows.map(({ id, name }) => ({
      name: name,
      value: id,
    }));

    inquirer.prompt([
      {
        name: 'title',
        message: 'What is the name of the role?',
      },
      {
        name: 'salary',
        message: 'What is the salary for the role?',
      },
      {
        type: 'list',
        name: 'department_id',
        message: 'Which department does the role belong to?',
        choices: departmentChoices,
      },
    ])
      .then((role) => db.createRole(role))
      .then(() => console.log(`Added role to the database`))
      .then(() => init());  // Return to main menu after adding role
  });
}

// View all departments
function viewDepartments() {
  db.findAllDepartments()
    .then(({ rows }) => {
      console.table(rows);
    })
    .then(() => init());  // Return to main menu after viewing departments
}

// add departments
function addDepartment() {
  inquirer.prompt({
    name: 'name',
    message: 'What is the name of the department?',
  })
    .then((res) => {
      let departmentName = res.name;
      return db.createDepartment({ name: departmentName });
    })
    .then(() => console.log(`Added department to the database`))
    .then(() => init());  // Return to main menu after adding department
}

// function to quit
function quit() {
  console.log('Goodbye!');
  process.exit();
}