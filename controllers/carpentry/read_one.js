import Carpentry from "../../models/Carpentry.js";

let read_one = async (res, req, next) => {
    try {
        let {id} = req.params
        let product = await Carpentry.findById(id)

        if (!product) {
            return res.status(401).json({
                success: false,
                message: 'Product not finded'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Product finded sucessfully',
            response: product
        })

    } catch (error) {
        return next(error)
    }
}

export default read_one