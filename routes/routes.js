'use strict';
const express = require('express');
const router = express.Router();


const controllerGetArticle = require('../controllers/getArticle');
const controllerUser = require('../controllers/article/userController');
const controllerPost = require('../controllers/article/article');
const controllerComment = require('../controllers/article/comment');
    
router.get('/get-article', controllerGetArticle.getArticle);
router.get('/article-belongsTo', controllerGetArticle.getArticleBelongsTo);
router.get('/get-article-simple', controllerGetArticle.getArticleSimple);
router.post('/users', controllerUser.createUser);
router.get('/lazyload', controllerUser.oneToOne);
router.post('/posts', controllerPost.inputArticle);
router.post('/comments', controllerComment.inputComments);


module.exports = router;