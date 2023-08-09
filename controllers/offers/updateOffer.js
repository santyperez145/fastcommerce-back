import Offer from "../../models/Offers.js";

export default async (req, res) => {
    try {
      const { id } = req.params;
      const { name, category, product, image, porcentajeDescuento, brand } = req.body;
  
      const updatedOffer = await Offer.findByIdAndUpdate(
        id,
        { name, category, product, image, porcentajeDescuento, brand },
        { new: true }
      );
  
      if (!updatedOffer) {
        return res.status(404).json({ message: 'Oferta no encontrada' });
      }
      res.json(updatedOffer);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };