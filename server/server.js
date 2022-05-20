const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const sequelize = require('./config/database');
const {
  Recipe,
  Product,
  Ingredient,
} = require('./models/Product/associations');
// const fs = require('fs');
// const ingredients = JSON.parse(fs.readFileSync('./ingredients.json'));

const port = process.env.PORT || 5000;

sequelize.authenticate().then(() => console.log('connected'));

sequelize
  .sync()
  .then((result) => {
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
