const assert = require('assert');
const User = require('../server/models/User');

describe('Find users in the database', () => {
  let user0;
  let user1;
  let user2;
  let user3;

  beforeEach((done) => {
    user0 = new User({ name: 'User #0' });
    user1 = new User({ name: 'User #1' });
    user2 = new User({ name: 'User #2' });
    user3 = new User({ name: 'User #3' });

    Promise.all([
      user0.save(),
      user1.save(),
      user2.save(),
      user3.save(),
    ]).then(() => done());
  });

  it('find user by name', (done) => {
    User.find({ name: 'User #2' })
      .then((users) => {
        assert(users[0]._id === user2._id);
        done();
      });
  });

  it('find user by id', (done) => {
    User.findOne({ _id: user2._id })
      .then((user) => {
        assert(user.name === 'User #2');
        done();
      });
  });
});
