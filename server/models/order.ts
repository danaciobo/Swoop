import mongoose from '../db.js';

const orderSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
      quantity: {
        type: Number,
        default: 1,
      },
    },

  ],
  total: {
    type: Number,
    required: true,
  },
  buyer: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  seller: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
});

export default mongoose.model('Order', orderSchema);
