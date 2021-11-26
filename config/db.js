'use strict';
var Sequelize = require('sequelize');
var dotenv = require('dotenv');
dotenv.config();

var db = new Sequelize({
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASS,
    PORT: process.env.PORT,
    DB: process.env.DB,
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
})

module.exports = db;