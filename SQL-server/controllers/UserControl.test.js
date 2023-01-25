const { getUsers, getUserByEmail, createProfile } = require('./UserControl');

const User = require('../models/user');

describe('getUsers', () => {
  it('should return status 200 and a list of the items', async () => {
    User.findAll = jest
      .fn()
      .mockResolvedValue([{ name: 'user1' }, { name: 'user2' }]);
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await getUsers(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([
      { name: 'user1' },
      { name: 'user2' },
    ]);
  });
  it('should return status 500 and log the error if there is one', async () => {
    User.findAll = jest.fn().mockRejectedValue(new Error('Test Error'));

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    console.log = jest.fn();

    await getUsers(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(console.log).toHaveBeenCalledWith(new Error('Test Error'));
  });
});
