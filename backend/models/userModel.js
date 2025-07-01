// backend/models/userModel.js
const db = require('../config/db');

const createUser = async (user) => {
    const [result] = await db.execute(
        `INSERT INTO usuarios (tipo_documento, identificacion, nombre_completo, email, password, rol) VALUES (?, ?, ?, ?, ?, ?)`,
        [user.tipo_documento, user.identificacion, user.nombre_completo, user.email, user.password, user.rol]
    );
    return result;
};

const getAllUsers = async () => {
    const [rows] = await db.execute('SELECT id, nombre_completo, email, rol FROM usuarios');
    return rows;
};

const deleteUser = async (id) => {
    const [result] = await db.execute('DELETE FROM usuarios WHERE id = ?', [id]);
    return result;
};

const updateUser = async (id, user) => {
    const [result] = await db.execute(
        'UPDATE usuarios SET nombre_completo = ?, email = ?, rol = ? WHERE id = ?',
        [user.nombre_completo, user.email, user.rol, id]
    );
    return result;
};

module.exports = { createUser, getAllUsers, deleteUser, updateUser };
