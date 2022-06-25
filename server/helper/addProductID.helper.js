const addProductIdToAttributes = (
  productId,
  ingredients,
  nutrients,
  types
) => {
  const addProductIdToRecipes = (productId, ingredients) =>
    ingredients?.map((val) => {
      return {
        ...val,
        ingredientId: val.id,
        productId,
      };
    });

  const addProductId = (productId, arr) =>
    arr?.map((val) => {
      return { ...val, productId };
    });

  const newRecipes = addProductIdToRecipes(productId, ingredients);
  const newNutrients = addProductId(productId, nutrients);
  const newTypes = addProductId(productId, types);
  return { newRecipes, newNutrients, newTypes };
};

module.exports = addProductIdToAttributes;
