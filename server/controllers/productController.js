const {
  Recipe,
  Product,
  Ingredient,
  Nutrient,
  ProductNutrient,
} = require('../models/Product/associations');

// exports.checkID = (req, res, next, val) => {
//   if (+val > 10)
//     return res.status(400).json({ status: 'fail', message: 'Invalid Id' });
//   next();
// };

exports.getAllProducts = async (req, res) => {
  try {
    const listOfProducts = await Product.findAll();
    res.status(200).json(listOfProducts);
  } catch (err) {
    res
      .status(400)
      .json({ status: 'fail', message: `error trying to get product ${err}` });
  }
};

exports.getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findAll({
      where: {
        id,
      },
      include: [
        {
          model: Ingredient,
          through: [
            {
              attributes: ['ingredientText', 'unit', 'ingredientAmount'],
            },
          ],
        },
        { model: Nutrient, through: { attributes: ['amount', 'percentOfDailyNeeds']} },
      ],
    });
    res.status(200).json(product);
  } catch (err) {
    res
      .status(400)
      .json({ status: 'fail', message: `error trying to get product ${err}` });
  }
};

exports.createProduct = async (req, res) => {
  const { id: productId, extendedIngredients, nutrients } = req.body;

  const ingredients = extendedIngredients.map((val) => {
    const {
      id: ingredientId,
      amount: ingredientAmount,
      unit,
      original: ingredientText,
    } = val;
    return { ingredientAmount, unit, ingredientText, productId, ingredientId };
  });

  const newNutrients = nutrients.map((val) => {
    return { ...val, productId };
  });

  try {
    // create all the related records
    await Product.create(req.body);
    await Promise.all([
      Recipe.bulkCreate(ingredients),
      ProductNutrient.bulkCreate(newNutrients),
    ]);

    res.status(201).json({ status: 'ok', message: 'success' });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: `error trying to create product ${err}`,
      ingredients,
    });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.body;
  try {
    const result = await Product.update(
      { ...req.body },
      {
        where: {
          id,
        },
      }
    );
    if (!result[0]) throw new Error('Product does not exist');
    res
      .status(201)
      .json({ status: 'ok', message: `successfully update product ${id}` });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: `error trying to update product, ${err}`,
    });
  }
};

exports.removeProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Product.destroy({
      where: {
        id,
      },
    });
    if (!result[0]) throw new Error('Product does not exist');
    res.status(200).json({ status: 'ok', message: 'success' });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: `error trying to remove product ${id}, ${err}`,
    });
  }
};
