// models/Purchase.js
import { Schema, model } from 'mongoose';

const purchaseSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  items: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'products', required: true },
      quantity: { type: Number, default: 1 },
    },
  ],
  payment_status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  payment_id: { type: String },
  shipping_status: { type: String, enum: ['pending', 'shipped', 'delivered'], default: 'pending' },
  order_number: { type: String },
}, { timestamps: true });

const Purchase = model('Purchase', purchaseSchema);

export default Purchase;
