import { Schema, model } from 'mongoose';

let collection = 'categories';
let schema = new Schema(
    {
        name: { type: String, require: true },
        description: { type: String, requiere: false },
        cover_photo: { type: String, requiere: false },
    }
)

const Category = model(collection, schema);
export default Category;