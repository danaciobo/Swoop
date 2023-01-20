const Item = require("../models/item");

exports.getItems = async (req, res) => {
  try {
    const items = await Item.findAll();
    return res.status(200).json(items);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findAll({
      where: {
        id: req.body.itemId,
      },
    });
    return res.status(200).json(item);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

exports.createItem = async (req, res) => {
  try {
    console.log(req.body);
    const newItem = await Item.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      price: req.body.price,
      quantity: req.body.quantity,
      location: req.body.location,
      // image: req.file.path,
      // date_added: Date.now(),
      seller: req.body.seller,
    });
    res.status(201).send(newItem);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

exports.updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.update(req.body.updates, {
      where: {
        id: req.body.itemId,
      },
    });
    if (!updatedItem) {
      res.send({ error: "unable to update item" });
    }
    res.status(202).send(updatedItem);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

exports.deleteItem = async (req, res) => {
  try {
    await Item.destroy({
      where: {
        id: req.body.itemId,
      },
    });
    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};
