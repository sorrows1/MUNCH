const express = require('express');
const productTypeController = require('../../controllers/product/product.controller');
const router = express.Router();

router.route('/:id').post().patch().delete();

module.exports = router;