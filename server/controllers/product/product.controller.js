

const Product = require('../../models/Product/Product.model');
const Ingredient = require('../../models/Product/Ingredient.model');
const Nutrient = require('../../models/Product/Nutrient.model');
const Type = require('../../models/Product/Type.model');
const {
  Recipe,
  ProductType,
} = require('../../models/Product/associations');

const addProductIdToAttributes = require('../../helper/addProductID.helper');
const {
  updateRecipeTable,
  updateProductNutrientTable,
  createProductTypes,
  removeRecipes,
  removeProductNutrients,
  removeProductTypes,
} = require('../../helper/updateProduct.helper');

exports.checkID = async (req, res, next, val) => {
  try{
    const response = await Product.findByPk(+val)
    if (!response) return res.status(400).json({ status: 'fail', message: `Product does not exist` });

  } catch (err) {
    return res
      .status(400)
      .json({ status: 'fail', message: `${err}` });
  }
  next();
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        { model: Type,
          through: {
            attributes: [],
          }
        }
      ],
    });
    res.status(200).json(products);
  } catch (err) {
    res
      .status(500)
      .json({ status: 'fail', message: `error trying to get product, ${err}` });
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
          through: {
            attributes: ['original', 'unit', 'amount'],
          },
        },
        {
          model: Type,
          through: { attributes: [] },
        },
      ],
    });
    if (!product.length) throw new Error('Product does not exist');
    res.status(200).json(product);
  } catch (err) {
    res
      .status(404)
      .json({ status: 'fail', message: `error trying to get product, ${err}` });
  }
};

exports.createProduct = async (req, res) => {
  const { ingredients, types } = req.body;
  try {
    const product = await Product.create({...req.body, image: req.file.originalname});
    const { id } = product;

    const { newRecipes,  newTypes } = addProductIdToAttributes(
      id,
      JSON.parse(ingredients),
      JSON.parse(types)
    );


    // create records in the many to many associations
    await Promise.all([
      Recipe.bulkCreate(newRecipes),
      ProductType.bulkCreate(newTypes),
    ]);

    res.status(201).json({ status: 'ok', product: {...product.dataValues, types} });
  } catch (err) {
    console.log(err)
    // res.status(500).json({
    //   status: 'fail',
    //   message: `error trying to create product ${err}`,
    // });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { ingredients, types } = req.body;


    await Product.create({...req.body, id, image: req.file.originalname});

    const { newRecipes,  newTypes } = addProductIdToAttributes(
      id,
      JSON.parse(ingredients),
      JSON.parse(types)
    );

    // create records in the many to many associations
    await Promise.all([
      Recipe.bulkCreate(newRecipes),
      ProductType.bulkCreate(newTypes),
    ]);


    res
      .status(200)
      .json({ status: 'ok', message: `successfully updated product ${id}` });
  } catch (err) {
    res.status(404).json({
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
    if (!result) throw new Error(`Product ${id} does not exists!`);
    res.status(204).json();
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: `error trying to remove product ${id}, ${err}`,
    });
  }
};
