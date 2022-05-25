const Ingredient = require('../../models/Product/Ingredient.model');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.getSearchedIngredients = async (req, res) => {
  const { search } = req.query;
  try {
    const ingredients = await Ingredient.findAll({
      where: {
        ingredient: {
          [Op.like]: `%${search}%`,
        },
      },
      order: [['ingredient', 'ASC']],
      limit: 100,
    });
    res.status(200).json(ingredients);
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: `error trying to get ingredients, ${err}`,
    });
  }
};
