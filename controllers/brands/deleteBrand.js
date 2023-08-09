export default async (req, res) => {
    try {
      const { id } = req.params;
      const deletedBrand = await Brand.findByIdAndDelete(id);
      if (!deletedBrand) {
        return res.status(404).json({ message: 'Marca no encontrada' });
      }
      res.json({ message: 'Marca eliminada correctamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };