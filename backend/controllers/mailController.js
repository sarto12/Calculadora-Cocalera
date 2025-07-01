// backend/controllers/mailController.js
const nodemailer = require('nodemailer');

exports.solicitarCuenta = async (req, res) => {
    const { tipo_documento, numero_identificacion, nombre, correo, cargo } = req.body;
    if (!tipo_documento || !numero_identificacion || !nombre || !correo || !cargo) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }
    try {
        
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'solicitudescalculadoracocalera@gmail.com',
                pass: 'fzagpmznvkasssek' 
            }
        });
        const mailOptions = {
            from: 'solicitudescalculadoracocalera@gmail.com',
            to: 'solicitudescalculadoracocalera@gmail.com',
            subject: 'Nueva solicitud de cuenta',
            html: `<h2>Solicitud de cuenta</h2>
                <p><b>Tipo de documento:</b> ${tipo_documento}</p>
                <p><b>Número de identificación:</b> ${numero_identificacion}</p>
                <p><b>Nombre:</b> ${nombre}</p>
                <p><b>Correo:</b> ${correo}</p>
                <p><b>Cargo:</b> ${cargo}</p>`
        };
        await transporter.sendMail(mailOptions);
        res.json({ message: 'Solicitud enviada correctamente.' });
    } catch (error) {
        res.status(500).json({ message: 'Error al enviar la solicitud.' });
    }
};
