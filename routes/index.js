import express from 'express'
import auth_router from './auth.js';
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

router.use('/auth',auth_router)
router.use('/products', product_router)

export default router