const express = require('express');
const path = require('path');
const PostController = require('./controllers/posts-controller');

const buildDir = path.resolve(__dirname, '../build');
const publicDir = path.join(buildDir, '/public');

module.exports = (app) => {
  app.post('/api/posts', PostController.createPost);
  app.get('/api/posts', PostController.getPosts);
  app.put('/api/posts/:id', PostController.updatePost);
  app.delete('/api/posts/:id', PostController.deletePost);

  app.use('/public', express.static(publicDir));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(publicDir, 'index.html'));
  });
};
