import Offer from "../../models/Offers.js";

export default async (req, res) => {
    try {
      const offers = await Offer.find();
      res.json(offers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };