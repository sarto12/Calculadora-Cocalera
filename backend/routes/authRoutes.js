const express = require('express');
const router = express.Router();
const { registerUser, getUsuarios, deleteUsuario, updateUsuario, loginUser } = require('../controllers/authController');
const { solicitarCuenta } = require('../controllers/mailController');

// Ruta para login de usuario
router.post('/login', loginUser);
// Ruta para actualizar usuario
router.put('/usuarios/:id', updateUsuario);
// Ruta para solicitud de cuenta por correo
router.post('/solicitar-cuenta', solicitarCuenta);
// Ruta para eliminar usuario
router.delete('/usuarios/:id', deleteUsuario);
// Ruta para registrar usuario
router.post('/register', registerUser);
// Ruta para listar usuarios
router.get('/usuarios', getUsuarios);

module.exports = router;
