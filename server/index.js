const dotenv = require ('dotenv');
dotenv.config();
const { PORT, REACT_APP_HOST} = process.env;

const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');
const middleware = require ('./middleware/auth')
const corsSettings = {origin: REACT_APP_HOST, credentials: true}
app.use(cors(corsSettings));
app.use('/uploads', express.static('uploads'))
app.use(express.json());
app.use(router);
app.get('*', (req, res) => {
  res.status(404).send('Sorry, not found');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT};`));