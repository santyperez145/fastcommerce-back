import Brand from "../../models/Brands.js";

export default async (req, res) => {
    try {
      const { name, image } = req.body;
      const newBrand = new Brand({ name, image });
      await newBrand.save();
      res.status(201).json(newBrand);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };