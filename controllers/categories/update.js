import Category from "../../models/Category.js";

let update = async (req, res, next) => {
    try {
        let {newName} = req.body;
        let {id} = req.params;

        let category = await Category.findByIdAndUpdate(id, {name: newName})
        if (!category){
            return res.status(401).json({
                success: false,
                menssage: 'Category not found'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Category updated sucessfully',
            response: category
        })
        

    } catch (error) {
        return next(error)
    }
}

export default update;