require('dotenv').config()
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  secure: true
});

cloudinary.config(process.env.CLOUDINARY_URL
);

module.exports = cloudinary;