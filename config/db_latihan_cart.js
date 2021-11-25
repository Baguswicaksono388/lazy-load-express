'use strict';
var dotenv = require('dotenv');
dotenv.config();

module.exports = {
    HOST: process.env.HOST_LATIHAN_CART,
    USER: process.env.USER_LATIHAN_CART,
    PASSWORD: process.env.PASS_LATIHAN_CART,
    PORT: process.env.PORT_LATIHAN_CART,
    DB: process.env.DB_LATIHAN_CART,
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
}