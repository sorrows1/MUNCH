const express = require('express');
const cors = require('cors');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const recipeRoutes = require('./routes/recipeRoute.api');


app.use(express.json());
app.use(cors());

app.use('/api/v1/recipes', recipeRoutes);

module.exports = app;
