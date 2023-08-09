import Router from 'express'
import { createPurchase, getOrderDetails } from '../controllers/buys/purchaseControllers.js'

let payment_router = Router()

payment_router.post('/', createPurchase)
payment_router.get('/get-order-details/:orderNumber', getOrderDetails);

export default payment_router