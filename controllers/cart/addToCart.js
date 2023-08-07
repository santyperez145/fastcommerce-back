import Cart from "../../models/Cart.js";

export default async (req, res) => {
    const { user_id, productId, quantity } = req.body;
  
    try {
      let cart = await Cart.findOne({ user_id });
      
      if (!cart) {
        cart = new Cart({ user_id, items: [] });
      }
  
      const existingItemIndex = cart.items.findIndex(item => item.product.equals(productId));
  
      if (existingItemIndex !== -1) {
        cart.items[existingItemIndex].quantity += quantity;
      } else {
        cart.items.push({ product: productId, quantity });
      }
  
      await cart.save();
      res.json({ message: 'Product added to cart' });
    } catch (error) {
      console.error('Error adding product to cart:', error);
      res.status(500).json({ error: 'Error adding product to cart' });
    }
  };