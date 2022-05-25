const express = require('express');
const ingredientController = require('../controllers/ingredientController');
const router = express.Router();

router.route('/').get(ingredientController.getSearchedIngredients);

module.exports = router;
