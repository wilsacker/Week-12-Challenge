const pool = require('./connection');  // Import your connection

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

// Export this function
module.exports = { viewDepartments, addDepartment };