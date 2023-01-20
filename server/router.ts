
// const route = require('express').Route();
import express from 'express'
const route = express.Router()
import userController from './controllers/userController';
import itemController from './controllers/itemController';
// const authController = require('./controllers/authController');
import orderController from './controllers/orderController';
import upload from './middleware/upload'
import authMiddleware from './middleware/auth'


route.post('/register', upload.single('avatar'), userController.createProfile);
route.put('/editProfile/:id', authMiddleware.decodeToken, userController.updateProfile)
route.get('/users/:id', /*authMiddleware.decodeToken,*/ userController.getProfile)
route.get('/users', userController.getUsers);
route.get('/users/:email', /*authMiddleware.decodeToken,*/ userController.getUserByEmail)

route.get('/items', itemController.getItems);
route.get('items/:category', itemController.getByCategory);
route.get('/items/:id', itemController.getItemById);
route.post('/items', /*authMiddleware.decodeToken,*/ upload.single('image'), itemController.createItem)
route.put('/editItem/:id',authMiddleware.decodeToken, upload.single('image'), itemController.updateItem)
route.delete('/items/:id',authMiddleware.decodeToken, itemController.deleteItem);

route.get('/order/:id',orderController.getOrder);
route.post('/order/:id',orderController.checkout);
// add cart & checkout routees???

export default route;