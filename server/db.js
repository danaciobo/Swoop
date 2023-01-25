const mongoose = require('mongoose');

const {DB_NAME, DB_PORT} = process.env;
const MY_DB_NAME = DB_NAME || 'swoopDB2';
const MY_DB_PORT = DB_PORT || 27017;

mongoose.connect(
  `mongodb://localhost:${MY_DB_PORT}/${MY_DB_NAME}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(`Sorry, something went wrong! ${err}`);
    } else {
      console.log(`Database connected @ port ${MY_DB_PORT}!`)
  }
 }
);

module.exports = mongoose;