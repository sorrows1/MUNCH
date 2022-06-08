const addProductIdToAttributes = (
  productId,
  ingredients,
  // nutrients ,
  types
) => {
  // const addProductIdToRecipes = (productId, ingredients) =>
  //   ingredients?.map((val) => {
  //     return {
  //       ...val,
  //       ingredientId: val.id,
  //       productId,
  //     };
  //   });

  const addProductIdToTypes = (productId, arr) =>
    arr?.map((val) => {
      return {
        ...val,
        typeId: val.id,
        productId,
      };
    });

  const addProductId = (productId, arr) =>{
    return arr?.map((val) => {
      return { ...val, productId };
    });
  }

  const newRecipes = addProductId(productId, ingredients);
  // const newNutrients = addProductId(productId, nutrients);
  const newTypes = addProductIdToTypes(productId, types);
  return { newRecipes, newTypes };
};

module.exports = addProductIdToAttributes;
