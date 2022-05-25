const express = require('express');
const productNutrientController = require('../../controllers/product/productNutrient.controller');
const router = express.Router();

router.route('/:id').post().patch().delete()

module.exports = router