'use strict'
module.exports = (sequelize, DataTypes) => {
    const Carts = sequelize.define('Carts', {
        id: {
            // type: DataTypes.UUID,
            // primaryKey: true,
            // defaultValue: DataTypes.UUIDV4,
            // allowNull: false
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_category: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_goods: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        underscored: true,
        freezeTableName: true
    })
    return Carts
}