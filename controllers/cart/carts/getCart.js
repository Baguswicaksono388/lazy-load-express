'use strict';
const dbLatihanCart = require('../../../models/cart/index');
const tableCart = dbLatihanCart.carts;
const tableUser = dbLatihanCart.users;
const tableGoods = dbLatihanCart.goods;
const tableCategory = dbLatihanCart.category_goods;

// get Cart
exports.getCart = async (req, res) => {
    try {
        tableGoods.hasOne(tableCategory, {foreignKey: 'id_category'});
        tableGoods.belongsTo(tableCategory, {foreignKey: 'id_category'});

        tableGoods.hasOne(tableCart, { foreignKey: 'id_goods' });
        // tableCart.belongsTo(tableCart, { foreignKey: 'id' });

        tableCart.hasOne(tableUser, { foreignKey: 'id' }); //id pada table users
        tableCart.belongsTo(tableUser, { foreignKey: 'id_user' }); //id_user pada table Cart

        await tableGoods.findAll({
            include: [{
                model: tableCart,
                required: true,
                include: {
                    model: tableUser,
                    required: true,
                }
            },{
                model: tableCategory,
                required: true,
            }]
        })
        .then((goods) => {
            const obj = goods.map((good) => {
                return Object.assign(
                    {},
                    {
                        id_good: good.id,
                        id_category: good.Category_good.id_category,
                        name_goods: good.id,
                        name_category: good.Category_good.name,
                        id_cart: good.Cart.id,
                        quantity_cart: good.Cart.quantity,
                        id_user: good.Cart.User.id,
                        name_user: good.Cart.User.name
                    }
                )
                
            })
            res.status(200).json({
                message: 'Success',
                data: obj
            });
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error'
        });
    }
}