import Cart from "../../models/Cart.js";
import Product from "../../models/Product.js"; // Importa el modelo de Producto

export default async (req, res) => {
  const { user_id, items } = req.body;

  try {
    let cart = await Cart.findOneAndUpdate(
      { user_id },
      { $setOnInsert: { user_id }, $addToSet: { items: { $each: items } } },
      { upsert: true, new: true }
    );

    // Restar la cantidad seleccionada del stock del producto
    for (const item of items) {
      await Product.updateOne(
        { _id: item.product },
        { $inc: { stock: -item.quantity } }
      );
    }

    res.json({ message: 'Products added to cart' });
  } catch (error) {
    console.error('Error adding products to cart:', error);
    res.status(500).json({ error: 'Error adding products to cart' });
  }
};
