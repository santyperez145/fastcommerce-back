import Product from "../../models/Product.js"

let read = async (req, res, next) => {
    try {
        let product = await Product.find({})
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Categories not founded"
            })
        }

        return res.status(200).json({
            success: true,
            message: 'All categories list:',
            response: product
        })

    } catch (error) {
        return next(error)
    }
}

export default read;