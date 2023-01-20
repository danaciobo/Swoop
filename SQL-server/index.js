const express = require('express');
const app = express();
const cors = require('cors');
const  PORT  = 4001
const router = require('./router');
// const middleware = require ('./middleware/auth')
const sequelize = require('./models/index')
// const corsSettings = {origin: 'http://localhost:3000', credentials: true}
app.use(cors());

app.use(express.json());
app.use(router);
app.listen(PORT,()=>{ console.log(`Server listening on port ${PORT}`)})

sequelize.authenticate()

  
