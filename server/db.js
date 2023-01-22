const mongoose = require('mongoose');

const {DB_NAME, DB_PORT} = process.env;

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