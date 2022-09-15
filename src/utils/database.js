const { Sequelize } = require('sequelize');

// Create a connection to database
const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'aliceleo12345',
  database: 'airbnb',
  port: 5432,
});

module.exports = { db };