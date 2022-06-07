const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('munchdb', 'munchuser', 'password', {
  dialect: 'mysql',
  host: 'localhost',
  define: {
    timestamps: false // Don't create timestamp fields in database
},
});

module.exports = sequelize;
