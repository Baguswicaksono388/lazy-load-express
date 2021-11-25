'use strict';
var dotenv = require('dotenv');
dotenv.config();

module.exports = {
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
}