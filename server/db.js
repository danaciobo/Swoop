const mongoose = require('mongoose');

const DB_NAME = 'swoopDB2'
const DB_PORT = '27017'
mongoose.set('strictQuery', 'false')
mongoose.connect(
 'mongodb+srv://Matthew:Whakedw1@cluster0.men6wel.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(`Sorry, something went wrong! ${err}`);
    } else {
      console.log(`Database connected @ port ${DB_PORT}!`)
  }
 }
);

module.exports = mongoose;