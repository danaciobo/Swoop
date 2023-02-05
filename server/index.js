const dotenv = require ('dotenv');
dotenv.config();
const { PORT, REACT_APP_HOST, SECRET} = process.env;
const SERVER_PORT = PORT || 3005;
const MY_SECRET = SECRET || 'not a secure secret';
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');
const authMiddleware = require ('./middleware/auth');
const corsSettings = {origin: [REACT_APP_HOST || 'http://localhost:3000', 'https://checkout.stripe.com'], credentials: true}
const session = require ('express-session');
const path = require("path");


app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(cors(corsSettings));
app.use('/uploads', express.static('uploads'))
app.use(express.json());
app.use(
  session({
    name: 'sid',
    saveUninitialized: false,
    resave: false,
    secret: MY_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60,
      sameSite: true,
      httpOnly: false,
      // set to secure=true in a production environment & httpOnly: true
      secure: false,
    },
  })
);
app.use(router);
app.get('*', (req, res) => {
  res.status(404).send('Sorry, not found');
});

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT};`));

