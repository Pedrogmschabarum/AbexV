const express = require('express');
const router = express.Router();
const multaController = require('../controllers/multaController');

router.get('/', multaController.getAllMultas);
router.post('/', multaController.createMulta);

module.exports = router;
