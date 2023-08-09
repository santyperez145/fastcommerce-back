import Furniture from "../../models/Furniture.js";

let remove = async (res, req, next) => {
    try {
        let {id} = req.params
        let productDeleted = await Furniture.findByIdAndDelete(id)
        if (!productDeleted) {
            return res.status(400).json({
                success: false,
                message: "Product doesn't exist"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Product deleted sucessfully",
            response: productDeleted
        })

    } catch (error) {
        return next(error)
    }
}

export default remove