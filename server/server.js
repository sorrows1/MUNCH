const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const db = require('./models');

const port = process.env.PORT || 5000;

// db.sequelize.sync().then(() => {
//   app.listen(port, () => {
//     console.log(`App running on port ${port}...`);
//   });
// });

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
