const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  name: String,
  saved: [{
    ref: 'Twitt',
    type: mongoose.Schema.Types.ObjectId,
  }]
   
});

const User = mongoose.model('User', usersSchema);
module.exports = User;