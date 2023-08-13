  // controllers/purchaseController.js
  import mercadopago from 'mercadopago';
  import Purchase from '../../models/Purchase.js';
  import User from '../../models/User.js';
  import Product from '../../models/Product.js';
  import Cart from '../../models/Cart.js';
  import PDFDocument from 'pdfkit';
  import fs from 'fs';
  import nodemailer from 'nodemailer';

  mercadopago.configure({
    access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
  });

  const getUserById = async (user_id) => {
    try {
      const user = await User.findById(user_id);
      return user;
    } catch (error) {
      console.error('Error al obtener usuario por ID:', error);
      throw new Error('Error al obtener usuario por ID');
    }
  };

  const generateOrderNumber = () => {
    const timestamp = new Date().getTime(); // Obtén el timestamp actual
    const randomDigits = Math.floor(Math.random() * 10000); // Genera 4 dígitos aleatorios
    return `ORD-${timestamp}-${randomDigits}`;
  };

  const generatePDF = (order) => {
    const doc = new PDFDocument();
  
    const logoPath = './images/LogoFastCommerce.png';
    doc.image(logoPath, 50, 40, { width: 100 });
    doc.fontSize(20).text('FastCommerce', 170, 60);
    doc.fontSize(20).text('Resumen de Compra', { align: 'center' });
    doc.moveDown();
  
    doc.fontSize(14).text(`Número de Orden: ${order.order_number}`);
    doc.moveDown();
  
    order.items.forEach((item) => {
      doc.fontSize(12).text(`Producto: ${item.product.name}`);
      doc.fontSize(12).text(`Cantidad: ${item.quantity}`);
      doc.fontSize(12).text(`Precio Unitario: $${item.product.price}`);
      doc.moveDown();
    });
  
    const total = order.items.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
  
    doc.fontSize(14).text(`Total de la Compra: $${total.toFixed(2)}`, { align: 'right' });
  
    const pdfPath = `pdfs/ORD-${order.order_number}.pdf`;
    doc.pipe(fs.createWriteStream(pdfPath));
    doc.end();
  
    return pdfPath;
  };
  

  const sendEmailWithPDF = async (userEmail, pdfPath) => {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'santyperez145s@gmail.com',
        pass: 'yaqg rwof cjke kjco',
      },
    });
  
    const mailOptions = {
      from: 'santyperez145s@gmail.com',
      to: userEmail,
      subject: 'Resumen de Compra',
      html: `
      <h1>Resumen de Compra</h1>
      <p>Adjunto encontrarás el resumen de tu compra.</p>
      <img src="./images/LogoFastCommerce.png" alt="Logo de la Empresa">
    `,
    attachments: [
      {
        filename: 'ResumenCompra.pdf',
        path: pdfPath,
      },
    ],
  };
  
    try {
      await transporter.sendMail(mailOptions);
      console.log('Correo electrónico enviado con éxito');
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
    }
  };

  const cancelPendingPurchase = async (order) => {
    const cartItems = order.items;
  
    for (const cartItem of cartItems) {
      const productId = cartItem.product._id;
      const quantity = cartItem.quantity;
  
      // Devolver el stock al producto correspondiente
      await Product.findByIdAndUpdate(productId, { $inc: { stock: quantity } });
    }
  
    // Eliminar el carrito del usuario
    await Cart.findOneAndDelete({ user_id: order.user_id });
  };

  // Agrega esta función en el controlador createPurchase.js
const checkStockAvailability = async (cartItems) => {
  for (const item of cartItems) {
    const product = await Product.findById(item.product);
    if (!product || item.quantity > product.stock) {
      return false; // No hay suficiente stock para algún producto
    }
  }
  return true; // Hay suficiente stock para todos los productos
};

  const createPurchase = async (req, res) => {
    const { user_id, cartItems } = req.body;
  
    try {

      const hasEnoughStock = await checkStockAvailability(cartItems);
      if (!hasEnoughStock) {
        return res.status(400).json({ error: 'Insufficient stock for one or more products' });
      }

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

      const user = await getUserById(user_id);

      await Cart.findOneAndDelete({ user_id });

      
    // Configura un temporizador para cancelar el pedido si está en estado "pending" durante un tiempo determinado
    setTimeout(async () => {
      const updatedOrder = await Purchase.findById(newPurchase._id);

      if (updatedOrder.payment_status === 'pending') {
        await cancelPendingPurchase(updatedOrder);
        console.log('Pedido cancelado debido a un tiempo de espera excesivo');
      }
    }, 3600000); // 1 hora (ajusta el tiempo según tus necesidades)
  
      const pdfPath = generatePDF(newPurchase);
      sendEmailWithPDF(user.email, pdfPath);
  
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
      const idempotencyKey = req.headers['x-idempotency-key'];
      const notification = req.body;
  
      const { id: paymentId, status: newPaymentStatus } = notification.data;
      const order = await Purchase.findOne({ payment_id: paymentId });
  
      if (!order) {
        return res.status(404).json({ message: 'Orden no encontrada' });
      }
  
      // Actualiza el estado de pago de la orden con el nuevo estado
      order.payment_status = newPaymentStatus;
      await order.save();
  
      // Si el pago falló o fue cancelado, maneja el retorno de stock y la eliminación del carrito
      if (newPaymentStatus === 'failure' || newPaymentStatus === 'cancelled') {
        await cancelPendingPurchase(order);
        console.log('Pago falló o fue cancelado. Stock devuelto y carrito eliminado.');
      }
  
      res.status(200).send('Notificación recibida y procesada correctamente');
    } catch (error) {
      console.error('Error al procesar la notificación del webhook:', error);
      res.status(500).json({ error: 'Error al procesar la notificación del webhook' });
    }
  };

  export { createPurchase, getOrderDetails, getUserOrders, handleWebhookNotification };
