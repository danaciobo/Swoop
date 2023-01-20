const User = require('../models/user')


exports.createProfile = async (req, res) => {
    try {
      const newUser = await User.create({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        // avatar: req.file.path
  
      })
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
  
 
  
  exports.getUserByEmail = async (req, res) => {
    try {
      console.log(req.params);
      const email = req.body.email
      const profile = await User.findAll({ 
        where: {email: email}})
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
  