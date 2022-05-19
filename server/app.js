const express = require('express');
const cors = require('cors');

const app = express();
const productRoutes = require('./routes/productRoute.api');

app.use(express.json());
app.use(cors());

app.use('/api/v1/products', productRoutes);

module.exports = app;
