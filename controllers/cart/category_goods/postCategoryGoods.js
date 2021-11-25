'use strict';
const dbLatihanCart = require('../../../models/cart/index');
const tableCategoryGoods = dbLatihanCart.category_goods;

// Create Category
exports.createCategoryGoods = async (req, res) => {
    try {
        const post = {
            name: req.body.name
        }

        await tableCategoryGoods.create(post)
        .then((data) => {
            res.status(200).json({
                message: 'Success',
                data: data
            });
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error'
        });
    }
}