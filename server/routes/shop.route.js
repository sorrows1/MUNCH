const express = require('express');
const shopController = require('../controllers/shop/shop.controller');
const router = express.Router();

router.param('id', shopController.checkID);

router
  .route('/')
  .get(shopController.getAllProducts)

router
  .route('/:id')
  .get(shopController.getProduct)




module.exports = router;
