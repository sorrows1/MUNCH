const express = require('express');
const cors = require('cors');

const app = express();
const productRoute = require('./routes/product/product.route');
const ingredientRoute = require('./routes/product/ingredient.route');

app.use(express.json());
app.use(cors());

app.use('/api/v1/products', productRoute);
app.use('/api/v1/ingredients', ingredientRoute);


module.exports = app;
