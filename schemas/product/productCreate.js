import joi from "joi"

let productCreate = joi.object({

    name: joi.string().required().min(3).messages({
        "any.required": "Name is required",
        "string.min": "Min is not valid"
    }),
    brand: joi.string().required().messages({
        "ani.required": "Brand is required"
    }),
    category_id: joi.string().required().messages({
        "any.required": "Category is required"
    }),
    description: joi.object().required().messages({
        "object.required": "Description is required",
    }),
    cover_photo: joi.array().items(joi.string().uri()).required().messages({
            "array.base": "Cover photo must be an array",
            "array.empty": "Cover photo is required",
            "string.uri": "Cover photo must be a valid URL"
        }),
    price: joi.number().required().min(1).max(10).messages({
        "number.base": "Price must be a number",
        "number.min": "Price must be minimun $1",
        "number.max": "Price must be maximus $9999999999",
        "number.required": "Price is required"
    }),
    stock: joi.number().required().min(1).max(10).messages({
        'number.integer': 'Stock must be an integer number',
        'number.base': 'Stock must be a number'
    }),
    offer: joi.string().optional()
})

export default productCreate;