const sequelize = require('../../config/database');
const { DataTypes } = require('sequelize');

const Product = require('./Product.model');
const Ingredient = require('./Ingredient.model');
const Nutrient = require('./Nutrient.model');
const Type = require('./Type.model');

const Recipe = sequelize.define(
  'recipe',
  {
    original: { type: DataTypes.STRING, allowNull: false },
    unit: { type: DataTypes.STRING, allowNull: false },
    amount: { type: DataTypes.DECIMAL(7, 2), allowNull: false },
  },
  { timestamps: false }
);

const ProductNutrient = sequelize.define(
  'productNutrient',
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

const ProductType = sequelize.define('productType', {}, { timestamps: false });

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


Product.belongsToMany(Type, {
  through: ProductType,
  foreignKey: 'productId',
});
Type.belongsToMany(Product, {
  through: ProductType,
  foreignKey: 'typeId',
});


module.exports.Product = Product;

module.exports.Recipe = Recipe;
module.exports.ProductNutrient = ProductNutrient;
module.exports.ProductType = ProductType;
