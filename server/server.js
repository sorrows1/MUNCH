const app = require('./app');
const db = require('./models');

const port = 5000;

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });
});
