import express from 'express';
const app = express();
const cors = require('cors');

import config from './config/config';
import router from './router';
import middleware from './middleware/auth'
import jwt from 'express-jwt'
import jwks from 'jwks-rsa'


// var jwtCheck = jwt({
//       secret: jwks.expressJwtSecret({
//           cache: true,
//           rateLimit: true,
//           jwksRequestsPerMinute: 5,
//           jwksUri: 'https://dev-sydr5gofiqca2n6a.us.auth0.com/.well-known/jwks.json'
//     }),
//     audience: '/userAuth',
//     issuer: 'https://dev-sydr5gofiqca2n6a.us.auth0.com/',
//     algorithms: ['RS256']
// });


// app.use(jwtCheck);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

const corsSettings = {origin: 'http://localhost:3000', credentials: true}
app.use(cors(corsSettings));
app.use('/uploads', express.static('uploads'))
app.use(express.json());
app.use(router);
app.get('*', (req, res) => {
  res.status(404).send('Sorry, not found');
});
app.listen(3006, () => console.log(`Server running on port ${3006};`));
