const express = require('express');
const recipeController = require('../controllers/recipeController');
const router = express.Router();

router.param('id', recipeController.checkID);

router.route('/').get(recipeController.getAllRecipes);

router.route('/:id/information').get(recipeController.getRecipe)

module.exports = router;
