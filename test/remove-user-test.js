const assert = require('assert');
const User = require('../server/models/User');

describe('Delete a user', () => {
  let user;
  const name = 'User';

  beforeEach((done) => {
    user = new User({ name });
    user.save().then(() => done());
  });

  it('removes with Document.remove', (done) => {
    user.remove()
      .then(() => User.findOne({ name }))
      .then((res) => {
        assert(res === null);
        done();
      });
  });

  it('removes with Model.remove', (done) => {
    User.remove({ name })
      .then(() => User.findOne({ name }))
      .then((res) => {
        assert(res === null);
        done();
      });
  });

  it('removes with Model.findOneAndRemove', (done) => {
    User.findOneAndRemove({ name })
      .then(() => User.findOne({ name }))
      .then((res) => {
        assert(res === null);
        done();
      });
  });

  it('removes with Model.findByIdAndRemove', (done) => {
    User.findByIdAndRemove(user._id)
      .then(() => User.findOne({ name }))
      .then((res) => {
        assert(res === null);
        done();
      });
  });
});
