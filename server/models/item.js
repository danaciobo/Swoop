const mongoose = require('../db.js');

const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false,
        minlength: 3,
        maxlength: 25,
    },
    description: {
        type: String,
        required: false,
        minlength: 10,
        maxlength: 500,
    },
    category:{
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    quantity: {
      type: Number,
      default: 1,
    },
    location: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    date_added: {
        type: Date,
        default: Date.now
    },
    seller: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
  },
});

const Item =  mongoose.model('Item',itemSchema);
module.exports = Item;