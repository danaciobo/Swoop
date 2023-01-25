import mongoose from '../db.js';

const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 25,
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 500,
    },
    category:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
      type: Number,
      default: 1,
    },
    location: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
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

export default Item;