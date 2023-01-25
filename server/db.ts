import mongoose from 'mongoose';
import { ConnectOptions } from 'mongoose';

const DB_NAME = 'swoopDB2'
const DB_PORT = '27017'
//mongodb://127.0.0.1/
mongoose.connect(
  `mongodb://127.0.0.1/${DB_NAME}`,
  (err) => {
    if (err) {
      console.log(`Sorry, something went wrong! ${err}`);
    } else {
      console.log(`Database connected @ port ${DB_PORT}!`)
  }
 }
);

export default mongoose;