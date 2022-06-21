const mongoose = require("mongoose");
// const User = require("./User.model");

const twittsSchema = mongoose.Schema({
  title: String,
  text: String,
  users: {
  ref: 'User',
    type: mongoose.Schema.Types.ObjectId,
  },
  likes: [{
    ref: 'User',
    type: mongoose.Schema.Types.ObjectId,
  }],
  // comments: {
  //   ref: 'Comment',
  //   type: mongoose.Schema.Types.ObjectId
  // }
   
});

const Twitt = mongoose.model('Twitt', twittsSchema);
module.exports = Twitt;

