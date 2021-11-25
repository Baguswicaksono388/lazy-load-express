'use strict';
const express = require('express');
const routes = express.Router();
const { body, validationResult } = require('express-validator');

const controllerRegister = require('../controllers/cart/user/register');
const router = require('./routes');

const validator = [
    body('name').trim().not().isEmpty().withMessage('Name is required'),
    body('email').trim().not().isEmpty().withMessage('Email is required'),
    body('password').trim().not().isEmpty().withMessage('Password is required')
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

router.post('/register', validator, results, controllerRegister.registration);

module.exports = router;