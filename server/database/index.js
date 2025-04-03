const {Sequelize,DataTypes} = require('sequelize');

const connection = new Sequelize('VAULT', 'root', 'root', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

connection.authenticate()
.then(()=> console.log('Connection has been established successfully.'))


// connection.sync({force: false})

module.exports = connection;

