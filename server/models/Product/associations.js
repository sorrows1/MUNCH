const Product = require('./Product.model');
const Ingredient = require('./Ingredient.model');
const Nutrient = require('./Nutrient.model');
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

const ProductNutrient = sequelize.define(
  'productNutrients',
  {
    amount: {
      type: DataTypes.DECIMAL(7, 2),
      allowNull: false,
      defaultValue: 0,
    },
    percentOfDailyNeeds: {
      type: DataTypes.DECIMAL(7, 2),
      allowNull: false,
      defaultValue: 0,
    },
  },
  { timestamps: false }
);

Product.belongsToMany(Ingredient, { through: Recipe, foreignKey: 'productId' });
Ingredient.belongsToMany(Product, {
  through: Recipe,
  foreignKey: 'ingredientId',
});

Product.belongsToMany(Nutrient, {
  through: ProductNutrient,
  foreignKey: 'productId',
});
Nutrient.belongsToMany(Product, {
  through: ProductNutrient,
  foreignKey: 'nutrientId',
});

module.exports.Recipe = Recipe;
module.exports.ProductNutrient = ProductNutrient;
module.exports.Product = Product;
module.exports.Ingredient = Ingredient;
module.exports.Nutrient = Nutrient;
