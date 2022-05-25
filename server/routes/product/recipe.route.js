const express = require('express');
const recipeController = require('../../controllers/product/recipe.controller');
const router = express.Router();

router.route('/:id').post(recipeController.createRecipe).patch().delete();

module.exports = router;