import Category from "../../models/Category.js";

let remove = async (req, res, next) => {
    try {
        let {id} = req.params;
        let categoryRemoved = await Category.findByIdAndDelete(id);
        if (!categoryRemoved) {
            return res.status(400).json({
                success: true,
                message: "Category doesn't exist",
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Category deleted sucessfully'
        })
        
    } catch (error) {
        return next (error)
    }
}

export default remove;