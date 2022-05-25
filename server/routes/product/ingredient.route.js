const express = require('express');
const ingredientController = require('../../controllers/product/ingredient.controller');
const router = express.Router();

router.route('/').get(ingredientController.getSearchedIngredients);

module.exports = router;
