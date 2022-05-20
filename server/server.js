const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const sequelize = require('./config/database');
const {
  Recipe,
  ProductNutrient,
  Product,
  Ingredient,
  Nutrient,
} = require('./models/Product/associations');
// const fs = require('fs');
// const ingredients = JSON.parse(fs.readFileSync('./ingredients.json'));

const port = process.env.PORT || 5000;

sequelize.authenticate().then(() => console.log('connected'));

sequelize
  .sync()
  .then((result) => {
    app.listen(port);
    Nutrient.bulkCreate([
      {
        name: 'Calories',
        amount: 585.21,
        unit: 'kcal',
        percentOfDailyNeeds: 29.26,
      },
      {
        name: 'Fat',
        amount: 19.96,
        unit: 'g',
        percentOfDailyNeeds: 30.7,
      },
      {
        name: 'Saturated Fat',
        amount: 7.88,
        unit: 'g',
        percentOfDailyNeeds: 49.22,
      },
      {
        name: 'Carbohydrates',
        amount: 83.89,
        unit: 'g',
        percentOfDailyNeeds: 27.96,
      },
      {
        name: 'Net Carbohydrates',
        amount: 77.16,
        unit: 'g',
        percentOfDailyNeeds: 28.06,
      },
      {
        name: 'Sugar',
        amount: 5.33,
        unit: 'g',
        percentOfDailyNeeds: 5.92,
      },
      {
        name: 'Cholesterol',
        amount: 30.27,
        unit: 'mg',
        percentOfDailyNeeds: 10.09,
      },
      {
        name: 'Sodium',
        amount: 451.33,
        unit: 'mg',
        percentOfDailyNeeds: 19.62,
      },
      {
        name: 'Alcohol',
        amount: 1.55,
        unit: 'g',
        percentOfDailyNeeds: 8.58,
      },
      {
        name: 'Protein',
        amount: 18.74,
        unit: 'g',
        percentOfDailyNeeds: 37.49,
      },
      {
        name: 'Selenium',
        amount: 59.88,
        unit: 'µg',
        percentOfDailyNeeds: 85.54,
      },
      {
        name: 'Vitamin C',
        amount: 56.62,
        unit: 'mg',
        percentOfDailyNeeds: 68.64,
      },
      {
        name: 'Manganese',
        amount: 1.11,
        unit: 'mg',
        percentOfDailyNeeds: 55.52,
      },
      {
        name: 'Vitamin K',
        amount: 58.21,
        unit: 'µg',
        percentOfDailyNeeds: 55.44,
      },
      {
        name: 'Phosphorus',
        amount: 296.28,
        unit: 'mg',
        percentOfDailyNeeds: 29.63,
      },
      {
        name: 'Fiber',
        amount: 6.73,
        unit: 'g',
        percentOfDailyNeeds: 26.92,
      },
      {
        name: 'Folate',
        amount: 87.59,
        unit: 'µg',
        percentOfDailyNeeds: 21.9,
      },
      {
        name: 'Vitamin B6',
        amount: 0.43,
        unit: 'mg',
        percentOfDailyNeeds: 21.45,
      },
      {
        name: 'Magnesium',
        amount: 71.4,
        unit: 'mg',
        percentOfDailyNeeds: 17.85,
      },
      {
        name: 'Calcium',
        amount: 176.02,
        unit: 'mg',
        percentOfDailyNeeds: 17.6,
      },
      {
        name: 'Potassium',
        amount: 594.38,
        unit: 'mg',
        percentOfDailyNeeds: 16.98,
      },
      {
        name: 'Iron',
        amount: 2.99,
        unit: 'mg',
        percentOfDailyNeeds: 16.6,
      },
      {
        name: 'Copper',
        amount: 0.33,
        unit: 'mg',
        percentOfDailyNeeds: 16.44,
      },
      {
        name: 'Zinc',
        amount: 2.21,
        unit: 'mg',
        percentOfDailyNeeds: 14.71,
      },
      {
        name: 'Vitamin B2',
        amount: 0.21,
        unit: 'mg',
        percentOfDailyNeeds: 12.08,
      },
      {
        name: 'Vitamin B5',
        amount: 1.17,
        unit: 'mg',
        percentOfDailyNeeds: 11.69,
      },
      {
        name: 'Vitamin A',
        amount: 537.51,
        unit: 'IU',
        percentOfDailyNeeds: 10.75,
      },
      {
        name: 'Vitamin B3',
        amount: 2.14,
        unit: 'mg',
        percentOfDailyNeeds: 10.69,
      },
      {
        name: 'Vitamin E',
        amount: 1.6,
        unit: 'mg',
        percentOfDailyNeeds: 10.68,
      },
      {
        name: 'Vitamin B1',
        amount: 0.16,
        unit: 'mg',
        percentOfDailyNeeds: 10.48,
      },
      {
        name: 'Vitamin B12',
        amount: 0.17,
        unit: 'µg',
        percentOfDailyNeeds: 2.85,
      },
    ]);
  })
  .catch((err) => {
    console.log(err);
  });
