const User = require('../models/user');
const bcrypt = require ('bcrypt')

exports.createProfile = async (req, res) => {

    const { email, password, firstName, lastName, phoneNumber } = req.body;
    const user = await User.findOne({ email: email });
    if (user)
    return res
      .status(409)
      .send({ error: '409', message: 'User already exists' });
     try {
    const hashedPassword = await bcrypt.hash(password, 10);

        // const newUser = new User({
    //   ...req.body,
    //   password: hash,
    // });
    // const user = await newUser.save();
    const user = await User.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      // avatar: req.file.path

    });
    req.session.uid = user._id;
    return res.status(201).send(user);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      message: "Error creating user"
    })
  }
};

exports.login = async (req, res) => {

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    const validatedPass = await bcrypt.compare(password, user.password);
    if (!validatedPass) throw new Error();
    req.session.uid = user._id;
    res.status(200).send(user);
  } catch (error) {
    res
      .status(401)
      .send({ error: '401', message: 'Username or password is incorrect' });
  }

};

exports.logout = (req, res) => {

  req.session.destroy((error) => {
    if (error) {
      res
        .status(500)
        .send({ error, message: 'Could not log out, please try again' });
    } else {
      res.clearCookie('sid');
      res.status(200).send({ message: 'Logout successful' });
    }
  });

};

exports.updateProfile = async (req, res) => {
  try {

  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

exports.getProfile = async (req, res) => {
  try {
    console.log(req.user)
    const { _id, firstName, lastName, phoneNumber, email } = req.user;
    const user = { _id, firstName, lastName, phoneNumber, email };
    res.status(200).send(user);

  } catch (e) {
    console.log(e);
    res.status(404).send({message: 'User not found'});
  }
};


exports.getUserByEmail = async (req, res) => {
  try {
    const email = req.params.email
    const profile = await User.findOne({email: email})
    return res.status(200).json(profile);

  } catch (e) {
    console.log(e);
    res.status(500);
  }
};
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};
