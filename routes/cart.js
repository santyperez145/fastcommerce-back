import Router from 'express'
import getCartItems from '../controllers/cart/getCartItems.js'
import addToCart from '../controllers/cart/addToCart.js'
import updateCartItem from '../controllers/cart/updateCartItems.js'
import removeCartItem from '../controllers/cart/removeCartItems.js'


let cart_router = Router()

cart_router.get('/:user_id', getCartItems);
cart_router.post('/add-to-cart', addToCart);
cart_router.put('/update-cart-item', updateCartItem);
cart_router.put('/remove-cart-item', removeCartItem);

export default cart_router

