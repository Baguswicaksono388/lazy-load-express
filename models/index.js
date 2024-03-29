'use strict';
var dotenv = require('dotenv');
dotenv.config();
const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/db');

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

sequelize.authenticate()
.then(() => {
    console.log("DB Belajar Connected");
}).catch(err => {
    console.log(err)
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync();

db.users = require('./users')(sequelize, DataTypes);
db.posts = require('./posts')(sequelize, DataTypes);
db.comments = require('./comments')(sequelize, DataTypes);


db.users.hasMany(db.posts, {foreignKey: 'user_id'});
db.posts.belongsTo(db.users, { foreignKey: 'user_id' });

// db.users.hasOne(db.posts, { foreignKey: 'user_id', as: 'postDetail' });
// db.users.hasMany(db.posts, { foreignKey: 'user_id', as: 'postDetail' });
// db.posts.belongsTo(db.users, {foreignKey: 'id'});

module.exports = db;