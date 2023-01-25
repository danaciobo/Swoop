const { getItems, getItemById } = require('./ItemController');
const Item = require('../models/item');

describe('getItems', () => {
  test('returns a list of items', async () => {
    // Create a mock implementation of the Item.findAll() method
    // that returns a promise that resolves to a list of items
    Item.findAll = jest
      .fn()
      .mockResolvedValue([{ name: 'item1' }, { name: 'item2' }]);
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await getItems(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([
      { name: 'item1' },
      { name: 'item2' },
    ]);
  });
});

describe('getItemById', () => {
  let req, res;
  beforeEach(() => {
    req = {
      params: {
        id: 1,
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it('should return status 200 and the item with the given id', async () => {
    Item.findOne = jest.fn().mockResolvedValue({ id: 1, name: 'Test Item' });

    await getItemById(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ id: 1, name: 'Test Item' });
  });

  it('should return status 500 and log the error if there is one', async () => {
    Item.findOne = jest.fn().mockRejectedValue(new Error('Test Error'));

    console.log = jest.fn();

    await getItemById(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(console.log).toHaveBeenCalledWith(new Error('Test Error'));
  });
});
