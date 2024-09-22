require('dotenv').config();
const { Pool } = require('pg');

// Set up PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'employee_tracker',
  password: process.env.PG_PASSWORD,
  port: 5432,
});

module.exports = pool;