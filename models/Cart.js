// models/cart.js
import { Schema, model } from 'mongoose';

let collection = 'carts'
const cartSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  items: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'products', required: true },
      quantity: { type: Number, default: 1 },
    },
  ],
});

const Cart = model('Cart', cartSchema);

export default Cart;
