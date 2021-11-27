'use strict'
const db = require('../models/index');
const tableUser = db.users;
const tablePosts = db.posts;
const tableComments = db.comments;
const { post } = require('../routes/routes');

exports.getArticle = async (req, res) => {
    try {
        // tableUser.hasMany(tablePosts, { foreignKey: 'user_id' });
        // tablePosts.belongsTo(tableUser, {foreignKey: 'id'});
        // tablePosts.hasMany(tableComments, {foreignKey: 'post_id'});
        // tableComments.belongsTo(tablePosts, {foreignKey: 'id'});

        await tableUser.findAll({
            attributes: [
                ['id','user_id'], 
                'username', 'role'
            ],
            include: [{
                model: tablePosts,
                as: 'postDetail',
                attributes: ['id', 'user_id', 'content', 'created_at'],
                // required: true,
                // include: [{
                //     model: tableComments,
                //     attributes: ['id','post_id','content','commenter_username','commenter_email','status','created_at'],
                //     // required: true,
                // }]
            }]
        }).then((data) => {
            res.status(200).json({
                message: 'Success',
                data: data
            })
        });

    } catch (error) {
        console.error(error)
    }
}

exports.getArticleBelongsTo = async (req, res) => {
    try {
        await tablePosts.findAll({
            include: [
                {
                    model: tableUser
                }
            ]
        }).then((data) => {
            res.status(200).json({
                message: 'Success',
                data: data
            })
        });

    } catch (error) {
        console.error(error)
    }
}

exports.getArticleSimple = async (req, res) => {
    try {
        tableUser.hasMany(tablePosts, {foreignKey: 'user_id'});
        tablePosts.belongsTo(tableUser, {foreignKey: 'id'});
        tablePosts.hasMany(tableComments, {foreignKey: 'post_id'});
        tableComments.belongsTo(tablePosts, {foreignKey: 'id'});

        tableUser.findAll({
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