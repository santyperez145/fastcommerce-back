import Router from 'express'
import createPurchase from '../controllers/buys/createPurchase.js'

let payment_router = Router()

payment_router.post('/', createPurchase)

export default payment_router