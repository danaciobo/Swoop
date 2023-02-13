const User = require("../models/user");

exports.createProfile = async (req, res) => {
  try {
    const existingUser = await User.findOne({
      where: { email: req.body.email },
    });

    if (existingUser) {
      res.status(400).send({ error: "User already exists" });
    }

    const newUser = await User.create({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
    });
    res.status(201).send(newUser);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

exports.updateProfile = async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

//for the profile page
exports.getUserByEmail = async (req, res) => {
  try {
    const email = req.body.email;
    const profile = await User.findOne({
      where: { email: email },
    });
    return res.status(200).json(profile);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.update(req.body.updates, {
      where: {
        id: req.body.userId,
      },
    });
    if (!updatedUser) {
      res.send({ error: "unable to update item" });
    }
    res.status(202).send(updatedUser);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};
