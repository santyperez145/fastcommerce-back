import Cart from "../../models/Cart.js";

export default async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    const cart = await Cart.findOne({ user_id: userId });

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    const cartItem = cart.items.find(item => item.product.equals(productId));

    if (!cartItem) {
      return res.status(404).json({ error: 'Product not found in cart' });
    }

    // Devuelve la cantidad anterior al stock del producto
    const product = await Product.findById(cartItem.product);
    product.stock += cartItem.quantity;
    await product.save();

    // Actualiza la cantidad en el carrito y resta del stock
    cartItem.quantity = quantity;
    product.stock -= quantity;
    await product.save();
    await cart.save();

    res.json({ message: 'Cart item quantity updated' });
  } catch (error) {
    console.error('Error updating cart item quantity:', error);
    res.status(500).json({ error: 'Error updating cart item quantity' });
  }
};
