const express = require('express');
const cors = require('cors');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const recipeRoutes = require('./routes/recipeRoute.api');
const mainRoute = require('./routes/mainRoute');


app.use(express.json());
app.use(cors());
app.engine(
  'handlebars',
  exphbs.engine({
    defaultLayout: 'main', // Specify default template views/layout/main.handlebar
  })
);
app.set('view engine', 'handlebars');
// Creates static folder for publicly accessible HTML, CSS and Javascript files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRoute);
app.use('/api/v1/recipes', recipeRoutes);

module.exports = app;
