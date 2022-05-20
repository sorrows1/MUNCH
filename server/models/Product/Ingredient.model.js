const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Ingredient = sequelize.define(
  'ingredient',
  {
    ingredientId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    ingredient: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Ingredient;
