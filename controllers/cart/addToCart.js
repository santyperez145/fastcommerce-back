import Cart from "../../models/Cart.js";

export default async (req, res) => {
  const { user_id, items } = req.body;

  try {
    let cart = await Cart.findOne({ user_id });

    if (!cart) {
      cart = new Cart({ user_id, items: [] });
    }

    for (const item of items) {
      const existingItemIndex = cart.items.findIndex(cartItem => cartItem.product.equals(item.product));

      if (existingItemIndex !== -1) {
        cart.items[existingItemIndex].quantity += item.quantity;
      } else {
        cart.items.push({ product: item.product, quantity: item.quantity });
      }
    }

    await cart.save();
    res.json({ message: 'Products added to cart' });
  } catch (error) {
    console.error('Error adding products to cart:', error);
    res.status(500).json({ error: 'Error adding products to cart' });
  }
};
