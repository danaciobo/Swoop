'use strict';
const fs = require('fs');
const path = require('path');
const { Sequelize, Op, Model, Dataypes } = require('sequelize');

const sequelize = new Sequelize('swoop_dev', 'matthew', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  port: '5432',
});

module.exports = sequelize;
