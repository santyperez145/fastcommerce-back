import Router from 'express'
import getCartItems from '../controllers/cart/getCartItems.js'
import addToCart from '../controllers/cart/addToCart.js'
import updateCartItem from '../controllers/cart/updateCartItems.js'
import removeCartItem from '../controllers/cart/removeCartItems.js'
import read_one from '../controllers/cart/readDetailsProduct.js'


let cart_router = Router()

cart_router.get('/:user_id', getCartItems);
cart_router.post('/add-to-cart', addToCart);
cart_router.put('/update-cart-item', updateCartItem);
cart_router.put('/remove-cart-item/:productId', removeCartItem);
cart_router.get('/cartdetails/:id', read_one)

export default cart_router

