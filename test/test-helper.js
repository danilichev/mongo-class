const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-class-test');
mongoose.connection
  .once('open', () => {
    console.log('Connected!');
  })
  .on('error', (error) => {
    console.warn('Warning', error);
  });
