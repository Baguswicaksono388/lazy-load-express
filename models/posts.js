'use strict';
var Sequelize = require('sequelize');
const db = require('../config/db');

var posts = db.define('posts', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
    },
    user_id: {
        type: Sequelize.UUID,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        required: true,
    },
    created_at: {
        type: Sequelize.DATE,
        // allowNull: false
    },
    updated_at: Sequelize.DATE,
    deleted_at: Sequelize.DATE,
}, {
    underscored: true,
    freezeTableName: true
});


module.exports = posts;

