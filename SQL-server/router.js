const router = require('express').Router();
const userCtrl = require('./controllers/UserControl');
const itemCtrl =  require('./controllers/ItemController')
// const itemController = require('./controllers/itemController');
// // const authController = require('./controllers/authController');
// const orderController = require('./controllers/orderController')
// const upload = require('./middleware/upload')
// const authMiddleware = require ('./middleware/auth')


router.post('/users', userCtrl.createProfile);
router.put('/users', /*authMiddleware.decodeToken,*/ userCtrl.getUserByEmail)
router.get('/users' , userCtrl.getUsers )
router.put('/user-update', userCtrl.updateUser)

router.post('/items', itemCtrl.createItem)
router.get('/items',itemCtrl.getItems )
router.get('/items/:id', itemCtrl.getItemById)
router.delete('/items' , itemCtrl.deleteItem)
router.put('/items', itemCtrl.updateItem )
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