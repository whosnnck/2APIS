const InventoryItem = require('../models/inventoryItem');

// Obtener un producto por ID
exports.getItemById = async (req, res) => {
  const { productId } = req.params;
  try {
    const item = await InventoryItem.findByPk(productId);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Actualizar la cantidad de un producto
exports.updateItemQuantity = async (req, res) => {
  const { id, quantity } = req.body;
  try {
    const item = await InventoryItem.findByPk(id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    item.quantity = quantity;
    await item.save();
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};
