// models/cart.js
import { Schema, model, Types } from 'mongoose';

let collection = 'carts'
const schema = new Schema({
  user_id: { type: Types.ObjectId, ref: 'users', required: true },
  items: [
    {
      product: { type: Types.ObjectId, ref: 'products', required: true },
      quantity: { type: Number, default: 1 },
    },
  ],
});

const Cart = model(collection, schema);

export default Cart;
