'use strict';
const db = require('../../models/index');
var Op = require('sequelize').Op;
const Users = db.users;
const Posts = db.posts;

var createUser = async (req, res) => {
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

        let data = await Users.create(input);
        
        res.status(201).json({
            message: 'Success',
            data: data
        });

    } catch (error) {
        res.status(500).json(error);
    }
}

var oneToOne = async (req, res) => {
    try {        
        let data = await Users.findOne({
            attributes: ['id','username','role'],
            where: {
                id: "b6769d03-e168-4e9e-a420-3d212c79021a"
            }
        });
    
        let postData = await data.getPosts({
            attributes: ['id', 'user_id', 'content', 'created_at'],
            where: {
                [Op.or]: [
                    {user_id: "b6769d03-e168-4e9e-a420-3d212c79021a"}
                ]
            }
        });
    
        let response = {
            users: data,
            posts: postData
        }
    
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error });
    }

}

module.exports = {
    createUser,
    oneToOne
}