const users = require('../model/User.model');
module.exports.usersController = {

    postUser: async (req, res) => {
    try {
        await users.create({
            name: req.body.name,
        })
        res.json('user post')
    } catch (e) {
        res.json(e)
    }
},

getUser: (req, res) => {
    users.find({})
    .then((data) => {
        res.json(data)
    })
},


addSaved: async (req, res) => {
    try {
        await users.findByIdAndUpdate(req.params.id, {
          $push: {
            saved: req.body.saved
          },  
        })
        res.json('added saved')
    } catch (e) {
        res.json(e)
        
    }
},

deleteUser: async (req, res) => {
    try {
      await  users.findByIdAndRemove(req.params.id)
        res.json('delted user')
    } catch (error) {
        res.json(error)   
    }
}

}

