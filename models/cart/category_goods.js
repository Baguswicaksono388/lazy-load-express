'use strict'
module.exports = (sequelize, DataTypes) => {
    const Category_goods = sequelize.define('Category_goods', {
        id_category: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        underscored: true,
        freezeTableName: true
    })
    return Category_goods;
}