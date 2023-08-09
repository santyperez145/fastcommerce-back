export default async (req, res) => {
    try {
      const { id } = req.params;
      const { name, image } = req.body;
  
      const updatedBrand = await Brand.findByIdAndUpdate(id, { name, image }, { new: true });
      if (!updatedBrand) {
        return res.status(404).json({ message: 'Marca no encontrada' });
      }
      res.json(updatedBrand);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };