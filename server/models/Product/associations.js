const Product = require('./Product.model');
const Ingredient = require('./Ingredient.model');
const sequelize = require('../../config/database');
const { DataTypes } = require('sequelize');

const Recipe = sequelize.define(
  'recipe',
  {
    ingredientText: { type: DataTypes.STRING, allowNull: false },
    unit: { type: DataTypes.STRING, allowNull: false },
    ingredientAmount: { type: DataTypes.DECIMAL(7, 2), allowNull: false },
  },
  { timestamps: false }
);

Product.belongsToMany(Ingredient, { through: Recipe, foreignKey: 'productId' });
Ingredient.belongsToMany(Product, {
  through: Recipe,
  foreignKey: 'ingredientId',
});
// Product.hasMany(Recipe);
// Recipe.belongsTo(Product);
// Ingredient.hasMany(Recipe);
// Recipe.belongsTo(Ingredient);

module.exports.Recipe = Recipe;
module.exports.Product = Product;
module.exports.Ingredient = Ingredient;
