const Item = require('../models/item');
const User = require('../models/user');


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
    const id = req.params.id;
    const item = await Item.findById(id);
    return res.status(200).json(item);

  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

exports.createItem = async (req, res) => {
  try {
      const newItem = await Item.create({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        quantity: req.body.quantity,
        location: req.body.location,
        image: req.file.path,
        date_added: Date.now(),
        seller: req.body.seller
      });
      const user = await User.findOne({_id: req.body.seller});
      user.itemsForSale.push(newItem._id);
      const savedUser = await user.save();
      console.log(savedUser);
      res.status(201).send(newItem);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

exports.updateItem = async (req, res) => {
  try {
    const updateItem = await Item.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      price: req.body.price,
      quantity: req.body.quantity,
      location: req.body.location,
    } );
    const updatedItem = await Item.findOne({_id: req.params.id});
    res.status(201).send(updatedItem);

  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const deletedItem = await Item.findOneAndDelete({_id: req.params.id});
    const user = await User.findOne({_id: req.params.seller});
      user.itemsForSale.pull(req.params.id);
      const savedUser = await user.save();
      res.status(204).json('Delete successful');
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

