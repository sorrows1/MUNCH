const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Product = sequelize.define('product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  healthScore: {
    type: DataTypes.DECIMAL(5, 2),
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  dairyFree: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  glutenFree: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  ketogenic: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  lowFodmap: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  vegan: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  vegeterian: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  veryHealthy: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Product;
