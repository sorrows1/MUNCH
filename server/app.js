const express = require('express');
const cors = require('cors');

const app = express();
const productRoute = require('./routes/productRoute.api');
const ingredientRoute = require('./routes/ingredientRoute.api');

app.use(express.json());
app.use(cors());

app.use('/api/v1/products', productRoute);
app.use('/api/v1/ingredients', ingredientRoute);

module.exports = app;
