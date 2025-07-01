
const db = require('../config/db');
const bcrypt = require('bcryptjs');

exports.loginUser = async (req, res) => {
    const { correo, contrasena } = req.body;
    if (!correo || !contrasena) {
        return res.status(400).json({ message: 'Correo y contraseña son obligatorios.' });
    }
    try {
        // Buscar usuario por correo
        const [rows] = await db.execute('SELECT * FROM usuarios WHERE email = ?', [correo]);
        if (rows.length === 0) {
            return res.status(401).json({ message: 'Correo o contraseña incorrectos.' });
        }
        const usuario = rows[0];
        // Comparar contraseña
        const passwordMatch = await bcrypt.compare(contrasena, usuario.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Correo o contraseña incorrectos.' });
        }
        // Si es admin, enviar flag especial
        res.json({ message: 'Login exitoso', rol: usuario.rol });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor.' });
    }
};
// backend/controllers/authController.js
const { createUser, getAllUsers, deleteUser, updateUser } = require('../models/userModel');

exports.updateUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre_completo, email, rol } = req.body;
        if (!nombre_completo || !email || !rol) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
        }
        await updateUser(id, { nombre_completo, email, rol });
        res.json({ message: 'Usuario actualizado correctamente.' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar usuario.' });
    }
};
exports.deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteUser(id);
        res.json({ message: 'Usuario eliminado correctamente.' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar usuario.' });
    }
};

exports.getUsuarios = async (req, res) => {
    try {
        const usuarios = await getAllUsers();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios.' });
    }
};


exports.registerUser = async (req, res) => {
    console.log('Llega al backend', req.body); // <-- Aquí se agrega la línea
    try {
        const { tipo_documento, numero_identificacion, nombres_apellidos, correo_institucional, id_rol, contrasena } = req.body;
        // Mapear los campos del frontend a los de la base de datos
        if (!tipo_documento || !numero_identificacion || !nombres_apellidos || !correo_institucional || !id_rol || !contrasena) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
        }
        // Encriptar contraseña
        const hashedPassword = await bcrypt.hash(contrasena, 10);
        const user = {
            tipo_documento,
            identificacion: numero_identificacion,
            nombre_completo: nombres_apellidos,
            email: correo_institucional,
            password: hashedPassword,
            rol: id_rol // Ahora debe ser el texto del rol, no el número
        };
        await createUser(user);
        res.status(201).json({ message: 'Usuario creado exitosamente.' });
    } catch (error) {
        console.error('ERROR AL CREAR USUARIO:', error); // Mostrar error en consola
        if (error.code === 'ER_DUP_ENTRY') {
            res.status(409).json({ message: 'El usuario o correo ya existe.' });
        } else {
            res.status(500).json({ message: 'Error al crear usuario.', error });
        }
    }
};



