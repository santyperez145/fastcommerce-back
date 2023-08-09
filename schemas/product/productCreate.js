import joi from "joi"

let productCreate = joi.object({
    category_id: joi.string().optional().messages({
        "any.required": "Category is required"
    }),
    name: joi.string().required().messages({
        "any.required": "Name is required"
    }),
    description: joi.string().required().min(10).messages({
        "string.min": "Description length must be at least 10 characters long",
        "string.empty": "Description is not allowed to be empty"
    }),
    cover_photo: joi.string().required().uri().messages({
            'any.required': 'Cover photo is required',
        }),
    price: joi.number().required().min(1).max(10).messages({
        "number.base": "Price must be a number",
        "number.min": "Price must be minimun $1",
        "number.max": "Price must be maximus $9.999.999.999"
    }),
    brand: joi.string().required().messages({
        "ani.required": "Brand is required"
    }),
    stock: joi.number().required().min(1).max(10).messages({
        'number.integer': 'Stock must be an integer number',
        'number.base': 'Stock must be a number'
    }),
    offer: joi.string()
})

export default productCreate;