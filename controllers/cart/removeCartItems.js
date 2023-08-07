import Cart from '../../models/Cart.js'

export default async (req, res) => {
    const { user_id, productId } = req.body;
  
    try {
      const cart = await Cart.findOne({ user_id });
  
      if (!cart) {
        return res.status(404).json({ error: 'Cart not found' });
      }
  
      cart.items = cart.items.filter(item => !item.product.equals(productId));
      await cart.save();
      res.json({ message: 'Cart item removed' });
    } catch (error) {
      console.error('Error removing cart item:', error);
      res.status(500).json({ error: 'Error removing cart item' });
    }
  };