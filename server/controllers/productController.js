const Product = require('../models/product.model');

// exports.checkID = (req, res, next, val) => {
//   if (+val > 10)
//     return res.status(400).json({ status: 'fail', message: 'Invalid Id' });
//   next();
// };

exports.getAllProducts = async (req, res) => {
  const listOfProducts = await Product.findAll();
  res.status(200).json(listOfProducts);
};

exports.getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(+id);
    res.status(200).json(product);
  } catch (err) {
    res
      .status(400)
      .json({ status: 'fail', message: 'error trying to get product' });
  }
};

exports.createProduct = async (req, res) => {
  const { title, imageUrl, price, description } = req.body;
  try {
    await Product.create(req.body);
    res.status(201).json({ status: 'ok', message: 'success' });
  } catch (err) {
    res
      .status(400)
      .json({ status: 'fail', message: 'error trying to create product' });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.body;
  try {
    await Product.update(
      { ...req.body },
      {
        where: {
          id,
        },
      }
    );
    res.status(201).json({ status: 'ok', message: req.body });
  } catch (err) {
    res
      .status(400)
      .json({ status: 'fail', message: 'error trying to update product' });
  }
};

exports.removeProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({ status: 'ok', message: 'success' });
  } catch (err) {
    res
      .status(400)
      .json({ status: 'fail', message: 'error trying to remove product' });
  }
};
