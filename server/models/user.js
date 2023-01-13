const mongoose = require('../db.js');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // password: {
  //   type: String,
  //   required: true,
  //   minlength: 6,
  // },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  itemsForSale: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }
],
  itemsBought: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }
],
});

module.exports = mongoose.model('User', userSchema);