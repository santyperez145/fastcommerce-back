import Offer from "../../models/Offers.js";

export default async (req, res) => {
    try {
      const { id } = req.params;
      const deletedOffer = await Offer.findByIdAndDelete(id);
      if (!deletedOffer) {
        return res.status(404).json({ message: 'Oferta no encontrada' });
      }
      res.json({ message: 'Oferta eliminada correctamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };