import Router from 'express';
import { createPurchase, getOrderDetails, getUserOrders, handleWebhookNotification } from '../controllers/buys/purchaseControllers.js';

const payment_router = Router();

// Ruta para crear una nueva compra
payment_router.post('/', createPurchase);

// Ruta para obtener los detalles de una orden específica por número de orden
payment_router.get('/get-order-details/:orderNumber', getOrderDetails);

// Ruta para obtener las órdenes de compra de un usuario específico
payment_router.get('/get-user-orders/:user_id', getUserOrders);

// Ruta para manejar las notificaciones del webhook de Mercado Pago
payment_router.post('/webhook', handleWebhookNotification);

export default payment_router;