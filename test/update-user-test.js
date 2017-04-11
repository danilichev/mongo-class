const assert = require('assert');
const User = require('../server/models/User');

const initialName = 'User';
const newName = 'SuperUser';

const assertName = (operation, done) => {
  operation
    .then(() => User.find({}))
    .then((users) => {
      assert(users.length === 1);
      assert(users[0].name === newName);
      done();
    });
};

describe('Update user', () => {
  let user;

  beforeEach((done) => {
    user = new User({ name: initialName });
    user.save().then(() => done());
  });

  it('changes name by instance set and save', (done) => {
    user.set('name', newName);
    assertName(user.save(), done);
  });

  it('updates name by Document.update', (done) => {
    assertName(user.update({ name: newName }), done);
  });

  it('updates with Model.update', (done) => {
    assertName(User.update({ name: initialName }, { name: newName }), done);
  });

  it('updates with Model.findOneAndUpdate', (done) => {
    assertName(
      User.findOneAndUpdate({ name: initialName }, { name: newName }), done);
  });

  it('updates with Model.findByIdAndUpdate', (done) => {
    assertName(
      User.findByIdAndUpdate(user._id, { name: newName }), done);
  });
});
