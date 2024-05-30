const express = require('express');
const router = express.Router();
const inventoryController = require('../controller/inventoryController');

router.get('/inventory/:productId', inventoryController.getItemById);
router.post('/inventory/update', inventoryController.updateItemQuantity);

module.exports = router;
