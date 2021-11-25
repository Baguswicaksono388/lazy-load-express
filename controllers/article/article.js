const dbBelajar = require('../../models/index');
const tablePost = dbBelajar.posts;

exports.inputArticle = async (req, res) => {
    try {
        const post = {
            user_id: req.body.user_id,
            content: req.body.content
        }

        if (!post.user_id || !post.content) {
            res.status(422).json({ message: 'Input Cannot null' });
            return;
        }

        await tablePost.create(post)
        .then((data) => {
            res.status(201).json({
                message: 'Success',
                data: data
            });
        })
    } catch (error) {
        res.status(500).json({ error: error });
    }
}