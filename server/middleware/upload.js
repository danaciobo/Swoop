const multer = require ('multer');

const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'|| file.mimetype === 'image/jpeg') {
    cb(null, true)
  } else {
    cb(new Error('The photo should be jpg or png') , false)
  }
}

const upload = multer({ dest: 'uploads/' },

{
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 *1024 * 5
  }
 });

 module.exports = upload;
