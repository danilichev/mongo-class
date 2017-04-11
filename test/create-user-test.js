const User = require('../server/models/User');

describe('Creating records', () => {
  it('saves a user', () => {
    const user = new User({ name: 'Dude' });
    user.save();
  });
});
