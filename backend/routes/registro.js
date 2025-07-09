const express = require('express');
const router = express.Router();
const { registrarFormulario } = require('../controllers/registroController');

router.post('/registro/formulario', registrarFormulario);

module.exports = router;