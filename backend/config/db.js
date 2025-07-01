// backend/config/db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // Cambia por tu usuario de MySQL
    password: '9671', // Cambia por tu contraseña de MySQL
    database: 'calculadoracocalera_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();
