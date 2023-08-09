import { Schema, model } from 'mongoose';

let collection = 'categories';
let schema = new Schema(
    {
        name: { type: String, require: true },
        description: { type: String, requiere: true },
        cover_photo: { type: String, requiere: true },
    }
)

const Category = model(collection, schema);
export default Category;