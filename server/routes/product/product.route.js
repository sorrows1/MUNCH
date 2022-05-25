const express = require('express');
const productController = require('../../controllers/product/product.controller');
const router = express.Router();

// router.param('id', productController.checkID);

router
  .route('/')
  .get(productController.getAllProducts)
  .post(productController.createProduct);


router
  .route('/:id')
  .get(productController.getProduct)
  .delete(productController.removeProduct)
  .patch(productController.updateProduct);

module.exports = router;
