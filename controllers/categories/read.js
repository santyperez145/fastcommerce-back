import Category from "../../models/Category.js";

let read = async (req, res, next) => {
    try {
        let category = await Category.find({})
        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Categories not founded"
            })
        }

        return res.status(200).json({
            success: true,
            message: 'All categories list:',
            response: category
        })

    } catch (error) {
        return next(error)
    }
}

export default read;