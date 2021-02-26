const express = require('express');
const router = express.Router();
const norseGodsController = require('../controllers/norse_gods_controller');

// Create a norse god - POST /api/norse
router.post('/', norseGodsController.createGod);

// Get all norse gods - GET /api/norse
router.get('/', norseGodsController.allGods);

// Get a norse god - GET /api/norse/:id
router.get('/:id', norseGodsController.singleGod);

// Update a god - PUT /api/norse/:id
router.put('/:id', norseGodsController.updateGod);

// Delete a god - DELETE /api/norse/:id
router.delete('/:id', norseGodsController.deleteGod);

module.exports = router;
