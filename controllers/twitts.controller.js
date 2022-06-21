const twitts = require('../model/Twitt.model');
module.exports.twittsController = {


    getTwitt: (req, res) => {
        twitts.find({})
            .then((data) => {
                res.json(data)
            })
    },

    postTwitt: async (req, res) => {
        try {
            await twitts.create({
                title: req.body.title,
                text: req.body.text,
                likes: req.body.likes
            })
            res.json('twitt post')
        } catch (e) {
            res.json(e)
        }
    },

    addLike: async (req, res) => {
        try {
            await twitts.findByIdAndUpdate(req.params.id, {
                $push: {
                    likes: req.body.likes
                },
            })
            res.json('added like')
        } catch (e) {
            res.json(e)
        }
    },


    deleteTwitt: async (req, res) => {
        try {
            await twitts.findByIdAndDelete(req.params.id)
            res.json(`delete twitts `)
        } catch (error) {
            res.json(error)

        }

    }
}


