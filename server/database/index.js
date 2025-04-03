// database/connection.js
const { Sequelize, DataTypes } = require('sequelize');

const connection = new Sequelize('VAULT', 'root', 'root', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

connection.authenticate()
  .then(() => console.log('Database connected successfully.'))
  .catch(err => console.error('Database connection failed:', err));

module.exports = connection;