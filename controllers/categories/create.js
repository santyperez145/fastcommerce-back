import Category from "../../models/Category.js";

let create = async (req, res, next) => {
    try {
        let { name, description, cover_photo } = req.body;

        

        if (!name) {
            return res.status(401).json({
                success: false,
                menssage: 'You must provide a name'
            })
        }

        if (!description) {
            return res.status(401).json({
                success: false,
                menssage: 'You must provide a description'
            })
        }

        if (!cover_photo) {
            return res.status(401).json({
                success: false,
                menssage: 'You must provide a cover photo'
            })
        }

        let existingCategory = await Category.findOne({ name });

        if (existingCategory) {
            return res.status(200).json({
                success: false,
                message: "Category already exits"
            })
        }

        let category = await Category.create({name, description, cover_photo})
        return res.status(201).json({
            succes: true,
            message: 'New category created successfully',
            response: category
        })

    } catch (error) {
        return next(error)        
    }

}

export default create;