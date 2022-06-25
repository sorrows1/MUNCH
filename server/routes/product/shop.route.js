const express = require('express');
const shopController = require('../../controllers/product/shop.controller');
const router = express.Router();

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './public/uploads/' + req.user.id + '/');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

function checkFileType(file, callback) {
  const filetypes = /jpeg|jpg|png|gif/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return callback(null, true);
  } else {
    callback({ message: 'image Only' });
  }
}

const uploadImage = multer({
  storage: storage,
  limits: {
    fileSize: 10000000000,
  },
  fileFilter: (req, file, callback) => {
    checkFileType(file, callback);
  },
}).single('image')


router.param('id', shopController.checkID);

router
  .route('/')
  .get(shopController.getAllProducts)
  .post(shopController.createProduct);

router
  .route('/:id')
  .get(shopController.getProduct)
  .delete(shopController.removeProduct)
  .patch(shopController.updateProduct);

module.exports = router;
