const env = require('dotenv').config({path: './.env'})
const express = require('express');
const app = express();
const cors = require('cors');
const  PORT  = 4002
const router = require('./router');


const sequelize = require('./models/index')


app.use(cors());

app.use(express.json({limit: "100mb"
}));
app.use(router);
app.listen(PORT,()=>{ console.log(`Server listening on port ${PORT}`)})

sequelize.authenticate()

  
