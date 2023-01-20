const router = require('express').Router();
const userCtrl = require('./controllers/UserControl');
// const itemController = require('./controllers/itemController');
// // const authController = require('./controllers/authController');
// const orderController = require('./controllers/orderController')
// const upload = require('./middleware/upload')
// const authMiddleware = require ('./middleware/auth')


router.post('/users', userCtrl.createProfile);
router.put('/users', /*authMiddleware.decodeToken,*/ userCtrl.getUserByEmail)

// router.get('/items', itemController.getItems);
// router.get('items/:category', itemController.getByCategory);
// router.get('/items/:id', itemController.getItemById);
// router.post('/items', /*authMiddleware.decodeToken,*/ upload.single('image'), itemController.createItem)
// router.put('/editItem/:id', upload.single('image'), itemController.updateItem)
// router.delete('/items/:id', itemController.deleteItem);

// router.get('/order/:id',orderController.getOrder);
// router.post('/order/:id',orderController.checkout);
// add cart & checkout routes???

module.exports = router;