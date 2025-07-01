// frontend/js/crear_usuario.js

document.getElementById('formCrearUsuario').addEventListener('submit', async function(e) {
    e.preventDefault();
    const tipo_documento = document.querySelector('select[name="tipo_documento"]').value;
    const numero_identificacion = document.querySelector('input[name="numero_identificacion"]').value;
    const nombres_apellidos = document.querySelector('input[name="nombre"]').value;
    const correo_institucional = document.querySelector('input[name="correo"]').value;
    const contrasena = document.querySelector('input[name="contrasena"]').value;
    const id_rol = document.querySelector('select[name="cargo"]').value; // Enviar el valor, no el índice

    const data = {
        tipo_documento,
        numero_identificacion,
        nombres_apellidos,
        correo_institucional,
        contrasena,
        id_rol
    };

    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = 'Procesando...';
    mensaje.style.color = '#388e3c';

    try {
        const res = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        if (res.ok) {
            mensaje.textContent = result.message || 'Usuario creado correctamente.';
            mensaje.style.color = '#388e3c';
            this.reset();
        } else {
            mensaje.textContent = result.message || 'Error al crear usuario.';
            mensaje.style.color = '#f44336';
        }
    } catch (err) {
        mensaje.textContent = 'Error de conexión con el servidor.';
        mensaje.style.color = '#f44336';
    }
});
