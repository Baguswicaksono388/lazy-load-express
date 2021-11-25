'use strict';
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const controllerGoods = require('../controllers/cart/goods/postGoods');

const validator = [
    body('name').trim().not().isEmpty().withMessage('Name is required'),
    body('id_category').trim().not().isEmpty().withMessage('Id_Category is required'),
    body('quantity').trim().not().isEmpty().withMessage('Quantity is required')
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

router.post('/create-goods', validator, results, controllerGoods.createGoods);

module.exports = router;