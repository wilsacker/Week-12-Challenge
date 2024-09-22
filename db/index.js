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

// Export this function
module.exports = { viewDepartments };