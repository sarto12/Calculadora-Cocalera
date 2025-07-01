// frontend/js/login.js

document.querySelector('.login-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('password').value;
    try {
        const res = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ correo, contrasena })
        });
        const result = await res.json();
        if (res.ok) {
            // Si es administrador, redirigir
            if (result.rol === 'Administrador') {
                window.location.href = 'Gestion_de_usuario.html';
            } else {
                alert('Login exitoso, pero no eres administrador.');
            }
        } else {
            alert(result.message || 'Error al iniciar sesión.');
        }
    } catch (err) {
        alert('Error de conexión con el servidor.');
    }
});
