import express from 'express'
import auth_router from './auth.js';
import brand_router from './brands.js';
import offer_router from './offers.js';
import payment_router from './payment.js';
import cart_router from './cart.js';
import category_router from './categories.js';
import product_router from './products.js';

let router = express.Router();

// const printTime =  (req, res, next)  => {
//   console.log("Time ", new Date())
//   next()
// }

// router.use(printTime)

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/auth', auth_router)
router.use('/brands', brand_router )
router.use('/offers', offer_router)
router.use('/payment', payment_router)
router.use('/cart', cart_router)
router.use('/categories', category_router)
router.use('/products', product_router)

export default router