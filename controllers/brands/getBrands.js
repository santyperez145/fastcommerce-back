import Brand from "../../models/Brands.js";

export default async (req, res) => {
    try {
      const brands = await Brand.find();
      res.json(brands);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };