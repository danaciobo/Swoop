const router = require('express').Router();
const userController = require('./controllers/userController');
const itemController = require('./controllers/itemController');
const authMiddleware = require('./middleware/auth');
const orderController = require('./controllers/orderController')
const upload = require('./middleware/upload')



router.post('/register',/* upload.single('avatar'),*/ userController.createProfile);
router.post('/login', userController.login);
router.put('/editMe', authMiddleware, userController.updateProfile)
router.get('/me', authMiddleware, userController.getProfile);
router.post('/logout', authMiddleware, userController.logout);
router.get('/users', userController.getUsers);

router.get('/items', itemController.getItems);
router.get('items/:category', itemController.getByCategory);
router.get('/items/:id', itemController.getItemById);
router.post('/items', upload.single('image'), itemController.createItem)
router.put('/editItem/:id',authMiddleware, upload.single('image'), itemController.updateItem)
router.delete('/items/:id',authMiddleware, itemController.deleteItem);

router.get('/order/:id',orderController.getOrder);
router.post('/order/:id',orderController.checkout);


module.exports = router;