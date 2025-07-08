const db = require('../config/db');

exports.registrarFormulario = (req, res) => {
  const datos = req.body;
  const {
    nombre_completo, identificacion, edad, genero, pertenencia_etnica, nivel_educativo,
    telefono, correo, datos_familiares,
    region, departamento, municipio, vereda, extension_ha,
    tipo_transformacion, anio_despojo
  } = datos;

  const sqlSolicitante = `
    INSERT INTO solicitantes (nombre_completo, identificacion, edad, genero, pertenencia_etnica, nivel_educativo, telefono, correo, datos_familiares)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sqlSolicitante, [
    nombre_completo, identificacion, edad, genero, pertenencia_etnica, nivel_educativo,
    telefono, correo, datos_familiares
  ], (err, result) => {
    if (err) {
      console.error('❌ Error al insertar solicitante:', err);
      return res.status(500).json({ error: 'Error al guardar el solicitante' });
    }

    const id_solicitante = result.insertId;

    const sqlPredio = `
      INSERT INTO predios (id_solicitante, region, departamento, municipio, vereda, extension_ha, tipo_transformacion, anio_despojo)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sqlPredio, [
      id_solicitante, region, departamento, municipio, vereda, extension_ha, tipo_transformacion, anio_despojo
    ], (err2) => {
      if (err2) {
        console.error('❌ Error al insertar predio:', err2);
        return res.status(500).json({ error: 'Error al guardar el predio' });
      }

      res.status(200).json({ mensaje: '✅ Datos registrados exitosamente' });
    });
  });
};