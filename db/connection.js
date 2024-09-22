const { Pool } = require('pg');

// Set up PostgreSQL connection
const pool = new Pool({
  user: 'postgres',  // Replace with your PostgreSQL username
  host: 'localhost',
  database: 'employee_tracker',
  password: '',  // Replace with your PostgreSQL password
  port: 5432,
});

module.exports = pool;