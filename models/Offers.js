import {Schema, Types, model} from 'mongoose'

let collection = 'offers'
let schema = new Schema({
  name: { type: String, required: true },
  category: { type: String },
  product: { type: Types.ObjectId, ref: 'products' },
  image: { type: String, required: true },
  porcentajeDescuento: { type: Number, required: true },
  brand: { type: Types.ObjectId, ref: 'brands' }, // Referencia a la marca
});

let Offer = model(collection, schema)

export default Offer