
'use strict'
const fs = require('fs');
const path = require('path');
const {Sequelize ,Op, Model , Dataypes} = require('sequelize');


const sequelize = new Sequelize('postgres', 'postgres', 'helloworld123', {
  host: 'localhost',
  dialect: 'postgres',
  port: '5432',

});





module.exports = sequelize;