const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('munchdb', 'munchuser', 'password', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
