import express from 'express';
const app = express();
const cors =  require('cors');
import config from './config/config';
import router from './router';
import middleware from './middleware/auth'
const corsSettings = {origin: 'http://localhost:3000', credentials: true}
app.use(cors(corsSettings));
app.use('/uploads', express.static('uploads'))
app.use(express.json());
app.use(router);
app.get('*', (req, res) => {
  res.status(404).send('Sorry, not found');
});

app.listen(3006, () => console.log(`Server running on port ${3006};`));


//for the json
    // "start": "nodemon ./index.ts",
    // "start:prod": "npm run build && node ./dist/src/server.js",
    // "build": "npx tsc"