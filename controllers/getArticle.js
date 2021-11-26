'use strict'
const model = require('../models/index');
const { post } = require('../routes/routes');

exports.getArticle = async (req, res) => {
    try {
        model.users.hasMany(model.posts, {foreignKey: 'user_id'});
        model.posts.belongsTo(model.users, {foreignKey: 'id'});
        model.posts.hasMany(model.comments, {foreignKey: 'post_id'});
        model.comments.belongsTo(model.posts, {foreignKey: 'id'});

        await model.users.findAll({
            attributes: ['id','username','role'],
            include: [{
                model: model.posts,
                attributes:['id','user_id','content','created_at'],
                // required: true,
                include: [{
                    model: model.comments,
                    attributes: ['id','post_id','content','commenter_username','commenter_email','status','created_at'],
                    // required: true,
                }]
            }]
        }).then((users) => {
            // console.log(users);
            res.status(200).json({
                message: 'Success',
                data: users
            });
        })

    } catch (error) {
        console.error(error)
    }
}

exports.getArticleSimple = async (req, res) => {
    try {
        model.users.hasMany(model.posts, {foreignKey: 'user_id'});
        model.posts.belongsTo(model.users, {foreignKey: 'id'});
        model.posts.hasMany(model.comments, {foreignKey: 'post_id'});
        model.comments.belongsTo(model.posts, {foreignKey: 'id'});

        model.users.findAll({
            attributes: ['id','username','role'],
            include: [{
                model: model.posts,
                attributes:['id','user_id','content','created_at'],
                required: true,
                include: [{
                    model: model.comments,
                    attributes: ['id','post_id','content','commenter_username','commenter_email','status','created_at'],
                    required: true,
                }]
            }]
        }).then((users) => {
            // console.log(users);
            const responseObject = users.map((user) => {
                return user.posts.map(post => {
                    return post.comments.map(comment => {
                        return Object.assign(
                            {},
                            {
                                id_user: user.id,
                                username: user.username,
                                role: user.role,
                                id_post: post.id,
                                post_content: post.content,
                                create_content: post.created_at,
                                id_comments: comment.id,
                                comment_content: comment.content,
                                commenter_username: comment.commenter_username,
                                commenter_email: comment.commenter_email,
                                status_comment: comment.status,
                                comment_create: comment.created_at
                            }
                        )
                    })
                })
            });
            res.json({ responseObject });
        })

    } catch (error) {
        console.error(error)
    }
}