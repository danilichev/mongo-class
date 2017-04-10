const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
