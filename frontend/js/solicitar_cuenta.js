// frontend/js/solicitar_cuenta.js

document.getElementById('formCrearUsuario').addEventListener('submit', async function(e) {
    e.preventDefault();
    const tipo_documento = document.querySelector('select[name="tipo_documento"]').value;
    const numero_identificacion = document.querySelector('input[name="numero_identificacion"]').value;
    const nombre = document.querySelector('input[name="nombre"]').value;
    const correo = document.querySelector('input[name="correo"]').value;
    const cargo = document.querySelector('select[name="cargo"]').value;

    const data = {
        tipo_documento,
        numero_identificacion,
        nombre,
        correo,
        cargo
    };

    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = 'Enviando solicitud...';
    mensaje.style.color = '#388e3c';

    try {
        const res = await fetch('http://localhost:3000/api/auth/solicitar-cuenta', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        if (res.ok) {
            mensaje.textContent = result.message;
            mensaje.style.color = '#388e3c';
            this.reset();
        } else {
            mensaje.textContent = result.message || 'Error al enviar solicitud.';
            mensaje.style.color = '#f44336';
        }
    } catch (err) {
        mensaje.textContent = 'Error de conexión con el servidor.';
        mensaje.style.color = '#f44336';
    }
});
