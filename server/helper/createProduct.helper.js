const addProductIdToAttributes = (
  productId,
  extendedIngredients,
  nutrients,
  types
) => {
  const addProductIdToRecipes = (productId, extendedIngredients) =>
    extendedIngredients.map((val) => {
      return {
        ...val,
        ingredientId: val.id,
        productId,
      };
    });

  const addProductId = (productId, arr) =>
    arr.map((val) => {
      return { ...val, productId };
    });

  const newRecipes = addProductIdToRecipes(productId, extendedIngredients);
  const newNutrients = addProductId(productId, nutrients);
  const newTypes = addProductId(productId, types);
  return { newRecipes, newNutrients, newTypes };
};
