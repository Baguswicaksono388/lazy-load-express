'use strict';

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("users", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            required: true,
        },
        role: {
            type: DataTypes.INTEGER
            // values: ['admin', 'user', 'disabled'],
        },
        deleted_at: DataTypes.DATE,
    }, {
        // underscored: true,
        freezeTableName: true,
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    });

    return Users;
}