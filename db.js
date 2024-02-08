require('dotenv').config(); // This line loads the environment variables from the .env file

const { Pool } = require('pg');
const db = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

db.connect();

module.exports = db;
