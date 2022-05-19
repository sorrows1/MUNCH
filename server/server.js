const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const sequelize = require('./config/database');
const Product = require('./models/product.model');

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
// app.listen(port, () => {
//   console.log(`App running on port ${port}`);
// });
