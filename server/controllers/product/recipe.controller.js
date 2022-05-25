const { Recipe } = require('../../models/Product/associations');

exports.createRecipe = async (req, res) => {
  const { id: productId } = req.params;
  try {
    const result = await Recipe.create({ ...req.body, productId });
    res.status(201).json({ status: 'ok', message: 'success' });
  } catch (err) {}
};

exports.updateRecipe = async (req, res) => {
  const { id: productId } = req.params;
  const { id: ingredientId } = req.body;
  try {
    const result = await Recipe.update(req.body, {
      where: { productId, ingredientId },
    });
    if (!result[0]) throw new Error('Product does not exist');
    res.status(200).json({ status: 'ok', message: 'success' });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: `error trying to update product, ${err}`,
    });
  }
};

exports.removeRecipe = async (req, res) => {
  const { id: productId } = req.params;
  const { id: ingredientId } = req.body;
  try {
    const result = await Recipe.destroy({
      where: { productId, ingredientId },
    });
    if (!result) throw new Error(`Product ${id} does not exists!`);
    res.status(204);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: `error trying to update product, ${err}`,
    });
  }
};
