'use strict';
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const controllerCarts = require('../controllers/cart/carts/postCarts');
const controllersGetCart = require('../controllers/cart/carts/getCart');

const validator = [
    body('id_category').trim().not().isEmpty().withMessage('Id_Category is required'),
    body('id_user').trim().not().isEmpty().withMessage('Id_User is required'),
    body('id_goods').trim().not().isEmpty().withMessage('Id_Goods is required'),
    body('quantity').trim().not().isEmpty().withMessage('Quantity is required'),
]

const results = (req, res, next) => {
    const result = validationResult(req);
    const hasError = !result.isEmpty();

    if (hasError) {
        const error = result.array()[0].msg;
        res.status(422).json({ success: false, message: error });
        return
    }
    next();
}

router.post('/create-carts', validator, results, controllerCarts.createCart);
router.get('/get-cart', controllersGetCart.getCart);

module.exports = router;