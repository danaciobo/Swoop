const mongoose = require('mongoose');

const DB_NAME = 'swoopDB'
const DB_PORT = '27017'

mongoose.connect(
  `mongodb://localhost:${DB_PORT}/${DB_NAME}`,
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