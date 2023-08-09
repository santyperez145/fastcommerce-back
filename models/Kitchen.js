import { Schema, model, Types } from 'mongoose';

let collection = 'kitchens'
let schema = new Schema(
    {
        category_id: { type: Types.ObjectId, ref:'categories', require: true },
        name: { type: String, require: true },
        description: { type: Array, require: true },
        cover_photo: { type: Array, require: true },
        price: { type: Number, require: true },
        brand: { type: String, require: true },
        stock: { type: Number, require: true },
        favorite: { type: Boolean, default: false },
        offer: { type: Boolean, default: false },
    },
    {timestamps: true}
    )

const Kitchens = model(collection, schema);
export default Kitchens