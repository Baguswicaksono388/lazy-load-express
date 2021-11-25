'use strict';
const dbLatihanCart = require('../../../models/cart/index');
const tableCarts = dbLatihanCart.goods;

// create Carts
exports.createGoods = async (req, res) => {
    try {
        const post = {
            id_category: req.body.id_category,
            name: req.body.name,
            quantity: req.body.quantity
        }

        await tableCarts.create(post)
        .then((data) => {
            res.status(200).json({
                message: 'Success',
                data: data
            });
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: 'Error'
        });
    }
}