'use strict'
const dbBelajar = require('../models/index');
const { post } = require('../routes/routes');
const tablePosts = dbBelajar.posts;
const tableComments = dbBelajar.comments;
const tableUsers = dbBelajar.users;

exports.getArticle = async (req, res) => {
    try {
        tableUsers.hasMany(tablePosts, {foreignKey: 'user_id'});
        tablePosts.belongsTo(tableUsers, {foreignKey: 'id'});
        tablePosts.hasMany(tableComments, {foreignKey: 'post_id'});
        tableComments.belongsTo(tablePosts, {foreignKey: 'id'});

        tableUsers.findAll({
            attributes: ['id','username','role'],
            include: [{
                model: tablePosts,
                attributes:['id','user_id','content','created_at'],
                required: true,
                include: [{
                    model: tableComments,
                    attributes: ['id','post_id','content','commenter_username','commenter_email','status','created_at'],
                    required: true,
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
        tableUsers.hasMany(tablePosts, {foreignKey: 'user_id'});
        tablePosts.belongsTo(tableUsers, {foreignKey: 'id'});
        tablePosts.hasMany(tableComments, {foreignKey: 'post_id'});
        tableComments.belongsTo(tablePosts, {foreignKey: 'id'});

        tableUsers.findAll({
            attributes: ['id','username','role'],
            include: [{
                model: tablePosts,
                attributes:['id','user_id','content','created_at'],
                required: true,
                include: [{
                    model: tableComments,
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