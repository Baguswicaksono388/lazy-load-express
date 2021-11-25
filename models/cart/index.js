'use strict'
const dbConfig = require('../../config/db_latihan_cart');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./users')(sequelize, Sequelize);
db.carts = require('./carts')(sequelize, Sequelize);
db.goods = require('./goods')(sequelize, Sequelize);
db.category_goods = require('./category_goods')(sequelize, Sequelize);

module.exports = db;