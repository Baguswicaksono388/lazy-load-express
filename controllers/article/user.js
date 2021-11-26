'use strict';
var db = require('../../models/index');
const Users = db.users;

exports.createUser = async (req, res) => {
    try {
        const input = {
            username: req.body.username,
            role: req.body.role
        }

        if (!input.role || !input.username) {
            res.status(422).json({ message: 'Input Cannot null' });
            return;
        }

        await Users.create(input)
        .then((data) => {
            res.status(201).json({
                message: 'Success',
                data: data,
            });
        });
    } catch (error) {
        res.status(500).json({ error: error});
    }
}