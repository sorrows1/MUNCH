const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Nutrient = sequelize.define(
  'nutrient',
  {
    nutrientId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Nutrient