'use strict';

module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("posts", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        user_id: {
            type: DataTypes.UUID,
            foreignKey: true,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            required: true,
        },
        deleted_at: DataTypes.DATE,
    }, {
        // underscored: true,
        updatedAt: 'updated_at',
        createdAt: 'created_at',
        freezeTableName: true
    });

    return Posts;
}

