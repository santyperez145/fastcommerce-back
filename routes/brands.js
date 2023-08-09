import Router from 'express'
import getBrands from '../controllers/brands/getBrands.js';
import createBrand from '../controllers/brands/createBrand.js';
import updateBrand from '../controllers/brands/updateBrand.js';
import deleteBrand from '../controllers/brands/deleteBrand.js';


let brand_router = Router()

brand_router.get('/', getBrands)
brand_router.post('/marcas', createBrand);
brand_router.put('/marcas/:id', updateBrand);
brand_router.delete('/marcas/:id', deleteBrand);

export default brand_router