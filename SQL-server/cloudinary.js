
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  secure: true
});

console.log(cloudinary.config({
  cloud_name: 'du13z5eh1',
  api_key : 559448568735465,
  api_secret: 'dgYrZrombH5MgeJH5CwDnb20zyw'
}
));

module.exports = cloudinary;