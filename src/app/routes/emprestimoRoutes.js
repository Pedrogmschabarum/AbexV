const express = require('express');
const router = express.Router();
const emprestimoController = require('../controllers/emprestimoController');

router.get('/', emprestimoController.getAllEmprestimos);
router.post('/', emprestimoController.createEmprestimo);

module.exports = router;
