'use strict';
var Sequelize = require('sequelize');
const db = require('../config/db');

var comments = db.define('comments', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: true,
    },
    post_id: {
        type: Sequelize.UUID,
        allowNull: true,
    },
    content: {
        type: Sequelize.TEXT,
        required: true,
    },
    commenter_username: {
        type: Sequelize.STRING,
        required: true,
    },
    commenter_email: {
        type: Sequelize.STRING,
        required: true,
    },
    status: {
        type: Sequelize.INTEGER,
        // values: ['approved', 'rejected', 'in review']
    },
    created_at: {
        type: Sequelize.DATE,
        // allowNull: false,
    },
    updated_at: Sequelize.DATE,
    delete_at: Sequelize.DATE
}, {
    underscored: true,
    freezeTableName: true
});

module.exports = comments;

