'use strict';

module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("comments", {
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
        delete_at: DataTypes.DATE
    }, {
        // underscored: true,
        updatedAt: 'updated_at',
        createdAt: 'created_at',
        freezeTableName: true
    });
    return Comments;
}


