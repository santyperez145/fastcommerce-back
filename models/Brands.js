import {Schema, model} from 'mongoose'

let collection = 'brands'
let schema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }
});

let Brand = model(collection, schema)

export default Brand