const db = require('../config/db');

exports.registrarFormulario = (req, res) => {
  const datos = req.body;
  const {
    nombres, identificacion, edad, genero, etnia, nivel,
    telefono, correo, familiares,
    region, departamento, municipio, vereda, hectareas,
    transformacion, anio
  } = datos;

  const sqlSolicitante = `
    INSERT INTO solicitantes (nombres, identificacion, edad, genero, etnia, nivel, telefono, correo, familiares)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sqlSolicitante, [
    nombres, identificacion, edad, genero, etnia, nivel,
    telefono, correo, familiares
  ], (err, result) => {
    if (err) {
      console.error('❌ Error al insertar solicitante:', err);
      return res.status(500).json({ error: 'Error al guardar el solicitante' });
    }

    const id_solicitante = result.insertId;

    const sqlPredio = `
      INSERT INTO predios (id_solicitante, region, departamento, municipio, vereda, hectareas, transformacion, anio)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sqlPredio, [
      id_solicitante, region, departamento, municipio, vereda, hectareas, transformacion, anio
    ], (err2) => {
      if (err2) {
        console.error('❌ Error al insertar predio:', err2);
        return res.status(500).json({ error: 'Error al guardar el predio' });
      }

      res.status(200).json({ mensaje: '✅ Datos registrados exitosamente' });
    });
  });
};