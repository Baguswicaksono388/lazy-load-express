'use strict';
const dbBelajar = require('../../models/index');
const tableUser = dbBelajar.users;

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

        await tableUser.create(input)
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