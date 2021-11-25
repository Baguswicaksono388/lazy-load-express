'use strict';
const dbLatihanCart = require('../../../models/cart/index');
var bcrypt = require('bcrypt');
const tableUsers = dbLatihanCart.users;

// Register
exports.registration = async (req, res) => {
    try {
        const post = {
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
        }

        await tableUsers.create(post)
        .then((data) => {
            res.status(200).json({
                message: 'Success',
                data: data,
            });
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error'
        });
    }
}