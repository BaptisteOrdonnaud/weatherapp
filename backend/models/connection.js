const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://baptisteordonnaud:adxbCcT4m6JYwvYH@cluster0.16ilost.mongodb.net/weatherapp';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
