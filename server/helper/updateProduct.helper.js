const { ProductNutrient } = require('../models/Product/associations');
const { Recipe } = require('../models/Product/associations');
const { ProductType } = require('../models/Product/associations');

exports.updateRecipeTable = async (extendedIngredients) => {
  if (!extendedIngredients.length) return;
  const newRecipes = extendedIngredients.map((recipe) => {
    return { ...recipe, ingredientId: recipe.id };
  });

  try {
    await Recipe.bulkCreate(newRecipes, {
      updateOnDuplicate: ['original', 'unit', 'amount'],
    });
    return;
  } catch (err) {
    throw new Error(`Error trying to update or create recipes ${err}`);
  }
};

exports.updateProductNutrientTable = async (nutrients) => {
  if (!nutrients.length) return;

  try {
    await ProductNutrient.bulkCreate(nutrients, {
      updateOnDuplicate: ['amount', 'percentOfDailyNeeds'],
    });
    return;
  } catch (err) {
    throw new Error(
      `Error trying to update or create product nutrients ${err}`
    );
  }
};

exports.createProductTypes = async (types) => {
  if (!types.length) return;

  try {
    await ProductType.bulkCreate(types, { ignoreDuplicates: true });
    return;
  } catch (err) {
    throw new Error(`Error trying to create product types ${err}`);
  }
};

exports.removeRecipes = async (productId, extendedIngredients) => {
  if (!extendedIngredients.length) return;
  try {
    await Recipe.destroy({
      where: { productId, ingredientId: [...extendedIngredients] },
    });
    return;
  } catch (err) {
    throw new Error(`Error trying to delete recipes ${err}`);
  }
};

exports.removeProductNutrients = async (productId, nutrients) => {
  if (!nutrients.length) return;
  try {
    await ProductNutrient.destroy({
      where: { productId, nutrientId: [...nutrients] },
    });
    return;
  } catch (err) {
    throw new Error(`Error trying to delete product nutrients ${err}`);
  }
};

exports.removeProductTypes = async (productId, types) => {
  if (!types.length) return;
    try {
      await ProductType.destroy({
        where: { productId, typeId: [...types] },
      });
      return;
    } catch (err) {
      throw new Error(`Error trying to delete product types ${err}`);
    }
};
