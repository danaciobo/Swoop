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
  
 
  //for the profile page
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
  
  exports.updateUser = async (req,res) =>{
    console.log('man is in the controller get me!')
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
  