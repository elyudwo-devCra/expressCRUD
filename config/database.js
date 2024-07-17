const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('board', 'root', 'Dudqk9696@', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;
