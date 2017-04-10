const Post = require('../models/Post');

exports.createPost = (req, res, next) => {
  const postProps = req.body;

  Post.create(postProps)
    .then(post => res.send(post))
    .catch(next);
};

exports.getPosts = (req, res, next) => {
  Post.find({})
    .select('-__v')
    .then(posts => res.send(posts))
    .catch(next);
};

exports.updatePost = (req, res, next) => {
  const postId = req.params.id;
  const postProps = req.body;

  Post.findByIdAndUpdate(postId, postProps)
    .then(() => Post.findById({ _id: postId }).select('-__v'))
    .then(post => res.send(post))
    .catch(next);
};

exports.deletePost = (req, res, next) => {
  const postId = req.params.id;

  Post.findByIdAndRemove(postId)
    .then(post => res.status(204).send(post))
    .catch(next);
};
