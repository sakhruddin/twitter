const comments = require('../model/Comment.model');
module.exports.commentsController = {

    postComment: async (req, res) => {
        try {
            const comments = await comments.create({
                title: req.body.title,
                text: req.body.text,
                twittId: req.body.twitts,
                userId: req.body.user
            })
            return res.json(comments)
        } catch (e) {
            res.json(e)
        }
    },

    getComment: (req, res) => {
        comments.find().populate('user').populate("twitt")
            .then((data) => {
                res.json(data)
            })
    },

    deleteComment: async (req, res) => {
        await comments.findByIdAndRemove(req.params.id)
        res.json('comment deleted')

    },

    getCommentsByUser : (req, res) => {
        comments.find({user: req.body.user})
        .then((data) => {
            res.json(data)
        })
    }
}