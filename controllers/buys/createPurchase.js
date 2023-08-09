// controllers/purchaseController.js
import mercadopago from 'mercadopago';
import Purchase from '../../models/Purchase.js';

mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
});

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
      payment_id: response.body.id, // Guarda el ID de preferencia como referencia
    });

    await newPurchase.save();

    res.json({ payment_url: response.body.init_point });
  } catch (error) {
    console.error('Error al crear la compra en MercadoPago:', error);
    res.status(500).json({ error: 'Error al procesar la compra' });
  }
};

export default createPurchase;
