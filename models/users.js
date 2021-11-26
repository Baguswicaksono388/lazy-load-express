'use strict';
var Sequelize = require('sequelize');
const db = require('../config/db');

var users = db.define('users', {

    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        required: true,
    },
    role: {
        type: Sequelize.INTEGER
        // values: ['admin', 'user', 'disabled'],
    },
    created_at: {
        type: Sequelize.DATE,
        // allowNull: false,
    },
    updated_at: Sequelize.DATE,
    deleted_at: Sequelize.DATE,
}, {
    underscored: true,
    freezeTableName: true
});

module.exports = users;