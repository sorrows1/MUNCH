const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

// router.param('id', productController.checkID);

router
  .route('/')
  .get(productController.getAllProducts)
  .post(productController.createProduct)
  .patch(productController.updateProduct)
  .delete(productController.removeProduct);

router.route('/:id/information').get(productController.getProduct);

module.exports = router;
