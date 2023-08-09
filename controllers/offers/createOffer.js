import Offer from "../../models/Offers.js";

export default async (req, res) => {
    try {
      const { name, category, product, image, porcentajeDescuento, brand } = req.body;
      const newOffer = new Offer({ name, category, product, image, porcentajeDescuento, brand });
      await newOffer.save();
      res.status(201).json(newOffer);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };