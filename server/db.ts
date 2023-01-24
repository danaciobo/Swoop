import mongoose from 'mongoose';
import { ConnectOptions } from 'mongoose';

const DB_NAME = 'swoopDB2'
const DB_PORT = '27017'

mongoose.connect(
  `mongodb://localhost:${DB_PORT}/${DB_NAME}`,
  (err) => {
    if (err) {
      console.log(`Sorry, something went wrong! ${err}`);
    } else {
      console.log(`Database connected @ port ${DB_PORT}!`)
  }
 }
);

export default mongoose;