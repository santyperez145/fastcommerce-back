  // controllers/purchaseController.js
  import mercadopago from 'mercadopago';
  import Purchase from '../../models/Purchase.js';

  mercadopago.configure({
    access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
  });

  const generateOrderNumber = () => {
    const timestamp = new Date().getTime(); // Obtén el timestamp actual
    const randomDigits = Math.floor(Math.random() * 10000); // Genera 4 dígitos aleatorios
    return `ORD-${timestamp}-${randomDigits}`;
  };

  const createPurchase = async (req, res) => {
    const { user_id, cartItems } = req.body; // Datos necesarios para la compra

    try {
      const preferenceItems = cartItems.map(item => ({
        title: item.product.name,
        unit_price: item.product.price * 607,
        quantity: item.quantity,
      }));


      const preference = {
        items: preferenceItems,
        back_urls: {
          success: "http://localhost:5173/dashboard/user/:user_id",
          failure: "http://localhost:5173/dashboard/user/:user_id",
          pending: "http://localhost:5173/dashboard/user/:user_id",
        },
        auto_return: "approved",
        // ... otros campos de la preferencia ...
      };

      const response = await mercadopago.preferences.create(preference);

      const newPurchase = new Purchase({
        user_id,
        items: cartItems.map(item => ({
          product: item.product,
          quantity: item.quantity,
        })),
        payment_status: 'pending',
        payment_id: response.body.id,
        shipping_status: 'pending',
        order_number: generateOrderNumber(),
      });

      await newPurchase.save();

      res.json({ payment_url: response.body.init_point });
    } catch (error) {
      console.error('Error al crear la compra en MercadoPago:', error);
      res.status(500).json({ error: 'Error al procesar la compra' });
    }
  };

  // controllers/purchaseController.js
  const getOrderDetails = async (req, res) => {
    const { orderNumber } = req.params;

    try {
      const order = await Purchase.findOne({ order_number: orderNumber });

      if (!order) {
        return res.status(404).json({ message: 'Orden no encontrada' });
      }

      // Consultar el estado del pago en Mercado Pago
      if (order.payment_id) {
        try {
          const paymentInfo = await mercadopago.payment.get(order.payment_id);
          order.payment_status = paymentInfo.body.status;
          await order.save();
        } catch (error) {
          console.error('Error al consultar el estado del pago en Mercado Pago:', error);
        }
      }

      res.json(order);
    } catch (error) {
      console.error('Error al obtener detalles de la orden:', error);
      res.status(500).json({ error: 'Error al obtener detalles de la orden' });
    }
  };

  // controllers/purchaseController.js
  const getUserOrders = async (req, res) => {
    const { user_id } = req.params;
  
    try {
      const orders = await Purchase.find({ user_id });
      res.json(orders);
    } catch (error) {
      console.error('Error fetching user orders:', error);
      res.status(500).json({ error: 'Error fetching user orders' });
    }
  };
  
  const handleWebhookNotification = async (req, res) => {
    try {
      // Verificar la autenticidad de la notificación usando el header 'x-idempotency-key'
      const idempotencyKey = req.headers['x-idempotency-key'];
  
      // Si es una notificación válida y auténtica, Mercado Pago enviará un payload en el cuerpo de la solicitud
      const notification = req.body;
  
      // Obtener el payment_id y el nuevo estado del payload de la notificación
      const { id: paymentId, status: newPaymentStatus } = notification.data;
  
      // Buscar la orden en la base de datos por el payment_id
      const order = await Purchase.findOne({ payment_id: paymentId });
  
      if (!order) {
        return res.status(404).json({ message: 'Orden no encontrada' });
      }
  
      // Actualizar el estado de pago de la orden con el nuevo estado
      order.payment_status = newPaymentStatus;
      await order.save();
  
      // Responder a la notificación de Mercado Pago
      res.status(200).send('Notificación recibida y procesada correctamente');
    } catch (error) {
      console.error('Error al procesar la notificación del webhook:', error);
      res.status(500).json({ error: 'Error al procesar la notificación del webhook' });
    }
  };

  export { createPurchase, getOrderDetails, getUserOrders, handleWebhookNotification };
