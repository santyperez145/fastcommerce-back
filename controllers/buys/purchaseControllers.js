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
  const { cartItems, user_id } = req.body; // Datos necesarios para la compra

  try {
    const items = cartItems.map(item => ({
      product: item.product,
      quantity: item.quantity,
    }));


    const preference = {
      items: cartItems.map(item => ({
        title: item.name,
        unit_price: item.price,
        quantity: item.quantity,
      })),
      back_urls: {
        success: "http://localhost:5173/checkout/success",
        failure: "http://localhost:5173/checkout/failure",
        pending: "http://localhost:5173/checkout/pending",
      },
      auto_return: "approved",
    };

    const response = await mercadopago.preferences.create(preference);

    const newPurchase = new Purchase({
      user_id,
      items,
      payment_status: 'pending',
      payment_id: response.body.id,
      shipping_status: 'pending', // Estado de envío pendiente
      order_number: generateOrderNumber(), // Genera un número de orden único
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

export { createPurchase, getOrderDetails };
