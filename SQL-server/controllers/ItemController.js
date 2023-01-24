const Item = require("../models/item");
const cloudinary = require('../cloudinary')
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
  const id = req.params.id
  try {
    const item = await Item.findOne({
      where: {
        id: id,
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
    const img = await cloudinary.uploader.upload(req.body.image)
    const newItem = await Item.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      price: req.body.price,
      quantity: req.body.quantity,
      location: req.body.location,
      image: img.secure_url,
      imageId: img,
      seller: req.body.seller,
    });
    res.status(201).send(newItem);
    console.log(newItem)
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
  const deleted =  await Item.destroy({
      where: {
        id: req.params.id
      },
    });
    res.sendStatus(200)
    // res.send(deleted)
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

exports.getItemByCategory = async (req, res) =>{
  try {
    const items = await Item.findAll({where:{
      category: req.params.category
    }})
  } catch (error) {
    console.log(error)
  }
}