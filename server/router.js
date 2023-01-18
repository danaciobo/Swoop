const router = require('express').Router();
const userController = require('./controllers/userController');
const itemController = require('./controllers/itemController');
// const authController = require('./controllers/authController');
const orderController = require('./controllers/orderController')
const upload = require('./middleware/upload')
const authMiddleware = require ('./middleware/auth')


router.post('/register', upload.single('avatar'), userController.createProfile);
router.put('/editProfile/:id', authMiddleware.decodeToken, userController.updateProfile)
router.get('/users/:id', /*authMiddleware.decodeToken,*/ userController.getProfile)
router.get('/users', userController.getUsers);
// router.get('/users/:email', /*authMiddleware.decodeToken,*/ userController.getUserByEmail)

router.get('/items', itemController.getItems);
router.get('items/:category', itemController.getByCategory);
router.get('/items/:id', itemController.getItemById);
router.post('/items', /*authMiddleware.decodeToken,*/ upload.single('image'), itemController.createItem)
router.put('/editItem/:id',authMiddleware.decodeToken, upload.single('image'), itemController.updateItem)
router.delete('/items/:id',authMiddleware.decodeToken, itemController.deleteItem);

router.get('/order/:id',orderController.getOrder);
router.post('/order/:id',orderController.checkout);
// add cart & checkout routes???

module.exports = router;