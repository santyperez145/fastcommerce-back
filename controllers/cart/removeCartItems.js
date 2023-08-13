import Cart from '../../models/Cart.js';
import Product from '../../models/Product.js';

export default async (req, res) => {
  const { user_id, productId } = req.body;

  try {
    const cart = await Cart.findOne({ user_id });

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    const cartItem = cart.items.find(item => item.product.equals(productId));

    if (!cartItem) {
      return res.status(404).json({ error: 'Product not found in cart' });
    }

    // Devuelve la cantidad al stock del producto
    const product = await Product.findById(cartItem.product);
    product.stock += cartItem.quantity;
    await product.save();

    // Filtra el producto del carrito
    cart.items = cart.items.filter(item => !item.product.equals(productId));
    await cart.save();

    res.json({ message: 'Cart item removed and stock restored' });
  } catch (error) {
    console.error('Error removing cart item:', error);
    res.status(500).json({ error: 'Error removing cart item' });
  }
};
