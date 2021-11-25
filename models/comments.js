'use strict'
module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define('comments', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: true,
        },
        post_id: {
            type: DataTypes.UUID,
            allowNull: true,
        },
        content: {
            type: DataTypes.TEXT,
            required: true,
        },
        commenter_username: {
            type: DataTypes.STRING,
            required: true,
        },
        commenter_email: {
            type: DataTypes.STRING,
            required: true,
        },
        status: {
            type: DataTypes.INTEGER,
            // values: ['approved', 'rejected', 'in review']
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated_at: DataTypes.DATE,
        delete_at: DataTypes.DATE
    }, {
        underscored: true,
        freezeTableName: true
    });
    return Comments;
}