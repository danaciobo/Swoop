interface User {

}

interface Items {
      title: {
        type: String,
        minlength: Number,
        maxlength: Number
    },
    description: {
        type: String,
        minlength: Number,
        maxlength: Number
    },
    category:{
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
      type: Number,
    },
    location: {
      type: String
    },
    image: {
      type: String
    },
    date_added: {
        type: Date,
    },
    seller: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
  }
}