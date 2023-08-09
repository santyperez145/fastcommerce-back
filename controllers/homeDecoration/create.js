import HomeDecoration from '../../models/HomeDecoration.js';

let create = async (req, res, next) => {
    try {
        let product = await HomeDecoration.create(req.body);
        return res.status(201).json({
            success: true,
            message: "Product created sucessfully",
            response: product
        })

    } catch (error) {
        return next(error)
    }
}

export default create;     