const comments = require('./comments');
const posts = require('./posts');
const users = require('./users');

const model = {}

model.comments = comments;
model.posts = posts;
model.users = users;

module.exports = model;