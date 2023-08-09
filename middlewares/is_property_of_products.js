import Product from '../models/Product.js';

const is_property_of_products = async (req, res, next) => {
    try {
        let { id } = req.params;
        let product = await Product.findById(id);

        if (!product) {
        return res.status(404).json({ error: 'Product not found' });
        }

        // Verifica si el usuario autenticado es el propietario del comentario.
        if (product.user_id.toString() !== req.user.id) {
        return res.status(403).json({ error: 'You do not have permission to modify this product' });
        }
        
        // Si pasa la verificación, continúa con la siguiente función.
        next();
    } catch (err) {
        return next(err);
    }
};

export default is_property_of_products