const router = require('express').Router();
const userCtrl = require('./controllers/UserControl');
const itemCtrl =  require('./controllers/ItemController')
const stripectrl = require('./controllers/StripeController')

router.post('/users', userCtrl.createProfile);
router.put('/users', /*authMiddleware.decodeToken,*/ userCtrl.getUserByEmail)
router.get('/users' , userCtrl.getUsers )
router.put('/user-update', userCtrl.updateUser)

router.post('/items/', itemCtrl.createItem)
router.get('/items/',itemCtrl.getItems )
router.delete('/items/:id' , itemCtrl.deleteItem)
router.put('/items/:id', itemCtrl.updateItem )
router.get('/items/:id', itemCtrl.getItemById)
router.put('/items/:id', itemCtrl.addBuyer)
router.get('/items/category/:category', itemCtrl.getItemByCategory)


//Stripe routes

router.post('/checkout', stripectrl.pay)
router.post('/add-item' , stripectrl.addProductToStripe)
module.exports = router;