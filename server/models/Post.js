const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default: '',
  },
});

const Post = mongoose.model('post', PostSchema);

module.exports = Post;
