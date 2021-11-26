'use strict';
const dbBelajar = require('../../models/index');
const tableUsers = dbBelajar.users;

exports.createUser = async (req, res) => {
    try {
        const input = {
            username : req.body.username,
            role : req.body.role
        }

        if(!input.username || !input.role) {
            res.status(422).json({
                message: "Input Cannot Null"
            })
            return;
        }

        let data = await tableUsers.create(input);
        
        res.status(201).json({
            message: 'Success',
            data: data
        });

    } catch (error) {
        res.status(500).json(error);
    }
}