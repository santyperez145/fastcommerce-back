import Cart from "../../models/Cart.js";

export default async (req, res) => {
    const { userId, productId, quantity } = req.body;
  
    try {
      const cart = await Cart.findOne({ userId });
  
      if (!cart) {
        return res.status(404).json({ error: 'Cart not found' });
      }
  
      const existingItem = cart.items.find(item => item.product.equals(productId));
  
      if (!existingItem) {
        return res.status(404).json({ error: 'Product not found in cart' });
      }
  
      existingItem.quantity = quantity;
      await cart.save();
      res.json({ message: 'Cart item updated' });
    } catch (error) {
      console.error('Error updating cart item:', error);
      res.status(500).json({ error: 'Error updating cart item' });
    }
  };