const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Type = sequelize.define(
  'types',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Type;
