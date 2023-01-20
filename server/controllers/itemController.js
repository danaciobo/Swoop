const Item = require('../models/item');


exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    return res.status(200).json(items);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

exports.getByCategory = async (req, res) => {
  try {

  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

exports.getItemById = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id
    const item = await Item.findById(id)
    return res.status(200).json(item);

  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

exports.createItem = async (req, res) => {
  try {
    console.log(req.body)
      const newItem = await Item.create({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        quantity: req.body.quantity,
        location: req.body.location,
        image: req.file.path,
        date_added: Date.now(),
        // seller: req.body.user.
      });
      res.status(201).send(newItem);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

exports.updateItem = async (req, res) => {
  try {

  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

exports.deleteItem = async (req, res) => {
  try {

  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

