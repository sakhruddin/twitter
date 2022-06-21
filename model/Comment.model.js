const mongoose = require("mongoose");

const commentsSchema = mongoose.Schema({
  text: String,
  twitt: {
  ref: 'Twitt',
    type: mongoose.Schema.Types.ObjectId,
  },
  user: {
    ref: 'User',
    type: mongoose.Schema.Types.ObjectId,
  }
   
});

const Comment = mongoose.model('Comment', commentsSchema);
module.exports = Comment;