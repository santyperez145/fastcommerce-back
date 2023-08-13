import Cart from "../../models/Cart.js";
import Product from "../../models/Product.js";

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
      const product = await Product.findById(item.product);
      if (!product) {
        return res.status(404).json({ error: `Product with ID ${item.product} not found` });
      }
      if (item.quantity > product.stock) {
        return res.status(400).json({ error: `Insufficient stock for product: ${product.name}` });
      }
      product.stock -= item.quantity;
      await product.save();
    }

    res.json({ message: 'Products added to cart' });
  } catch (error) {
    console.error('Error adding products to cart:', error);
    res.status(500).json({ error: 'Error adding products to cart' });
  }
};