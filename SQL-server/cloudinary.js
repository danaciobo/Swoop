
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  secure: true
});

console.log(cloudinary.config(process.env.CLOUDINARY_CREDENTIALS
));

module.exports = cloudinary;