
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  secure: true
});

console.log(cloudinary.config({
  cloud_name: dt9lltsq3,
  api_key : 435495744527896,
  api_secret: AQmgKAMXwj10PQGhRZ2dwClVhaQ
}
));

module.exports = cloudinary;