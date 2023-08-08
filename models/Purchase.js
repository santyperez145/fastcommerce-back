// models/Purchase.js
import { Schema, model } from 'mongoose';

let collection = 'purchases'
const purchaseSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  items: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'products', required: true },
      quantity: { type: Number, default: 1 },
    },
  ],
  payment_status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  payment_id: { type: String }, // Agrega campos adicionales según tu necesidad
  // Otros campos relevantes
}, { timestamps: true });

const Purchase = model('Purchase', purchaseSchema);

export default Purchase;
