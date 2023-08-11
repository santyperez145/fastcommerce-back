import Product from "../../models/Product.js";

const read_one = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Product ID is missing'
            });
        }

        const product = await Product.findOne({ _id: id }).select('-description');

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Product found successfully',
            response: product
        });

    } catch (error) {
        return next(error);
    }
}

export default read_one;
