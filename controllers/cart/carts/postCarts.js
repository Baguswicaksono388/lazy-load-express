'use strict';
const dbLatihanCart = require('../../../models/cart/index');
const tableCarts = dbLatihanCart.carts;

// create Carts
exports.createCart = async (req, res) => {
    try {
        const post = {
            id_user: req.body.id_user,
            id_category: req.body.id_category,
            id_goods: req.body.id_goods,
            quantity: req.body.quantity,
        }

        await tableCarts.create(post)
        .then((data) => {
            res.status(200).json({
                message: 'Success',
                data: data,
            });
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error'
        });
    }
}