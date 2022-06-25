const express = require('express');
const productController = require('../../controllers/product/product.controller');
const router = express.Router();

<<<<<<< HEAD

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './public/uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const uploadImage = multer({
  storage: storage,
  limits: {
    fileSize: 10000000000,
  },
  fileFilter: (req, file, callback) => {
    checkFileType(file, callback);
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

router.param('id', productController.checkID);

