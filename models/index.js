'use strict';
const dbConfig = require('../config/db');
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

db.users = require('../models/users')(sequelize, Sequelize);
db.comments = require('../models/comments')(sequelize, Sequelize);
db.posts = require('../models/posts')(sequelize, Sequelize);

// Relations
// db.comments.belongsTo(db.posts);
// db.posts.hasMany(db.comments);
// db.posts.belongsTo(db.users);
// db.users.hasMany(db.posts);

module.exports = db;
