'use strict';
const fs = require('fs');
const path = require('path');
const { Sequelize, Op, Model, Dataypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  port: '5432',
});

module.exports = sequelize;
