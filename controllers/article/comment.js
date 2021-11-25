const dbBelajar = require('../../models/index');
const tableComments = dbBelajar.comments;

exports.inputComments = async (req, res) => {
    try {
        const post = {
            post_id: req.body.post_id,
            content: req.body.content,
            commenter_username: req.body.commenter_username,
            commenter_email: req.body.commenter_email,
            status: req.body.status
        }

        if (!post.post_id || !post.content || !post.commenter_username || !post.commenter_email || !post.status) {
            res.status(422).json({ message: 'Input Cannot null' });
            return;
        }

        await tableComments.create(post)
        .then((data) => {
            res.status(201).json({
                message: 'Success',
                data: data
            });
        });

    } catch (error) {
        res.status(500).json({ error: error});
    }
}