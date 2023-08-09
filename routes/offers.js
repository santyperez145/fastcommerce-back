import Router from 'express'
import getOffers from '../controllers/offers/getOffers.js';
import createOffer from '../controllers/offers/createOffer.js';
import updateOffer from '../controllers/offers/updateOffer.js';
import deleteOffer from '../controllers/offers/deleteOffer.js';

let offer_router = Router()

offer_router.get('/offers', getOffers);
offer_router.post('/offers', createOffer);
offer_router.put('/offers/:id', updateOffer);
offer_router.delete('/offers/:id', deleteOffer);

export default offer_router