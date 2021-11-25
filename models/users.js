'use strict';

var Users = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
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
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE,
    }, {
        underscored: true,
        freezeTableName: true
    });
    return Users;
}

module.exports = Users;