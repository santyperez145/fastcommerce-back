import Cart from "../../models/Cart.js";

export default async (req, res) => {
    const { user_id } = req.params;
  
    try {
      const cart = await Cart.findOne({ user_id }).populate('items.product');
  
      if (!cart) {
        return res.status(404).json({ error: 'Cart not found' });
      }
  
      res.json({ cart });
    } catch (error) {
      console.error('Error fetching cart items:', error);
      res.status(500).json({ error: 'Error fetching cart items' });
    }
  };