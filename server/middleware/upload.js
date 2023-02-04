const multer = require ('multer');
const SharpMulter  =  require('sharp-multer');

const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'|| file.mimetype === 'image/jpg') {
    cb(null, true);
  } else {
    cb(new Error('The photo should be jpg or png') , false);
  }
}
const storage =
 SharpMulter ({
              destination:(req, file, callback) =>callback(null, 'uploads'),
              imageOptions:{
               fileFormat: 'jpg',
               quality: 80,
               resize: { width: 600, height: 600 },
                 }
           });
const upload  =  multer({ storage }, {
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 *1024 * 5
  }
 });

 module.exports = upload;
