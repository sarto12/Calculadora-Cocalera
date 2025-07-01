// frontend/js/listar_usuarios.js

document.addEventListener('DOMContentLoaded', async () => {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '<tr><td colspan="5">Cargando...</td></tr>';

    try {
        const res = await fetch('http://localhost:3000/api/auth/usuarios');
        const usuarios = await res.json();

        if (Array.isArray(usuarios) && usuarios.length > 0) {
            tbody.innerHTML = '';
            usuarios.forEach(usuario => {
                tbody.innerHTML += `
                    <tr>
                        <td>${usuario.id}</td>
                        <td>${usuario.nombre_completo}</td>
                        <td>${usuario.email}</td>
                        <td>${usuario.rol}</td>
                        <td>
                            <button class="btn-editar" style="background:#2196F3;color:#fff;border:none;padding:6px 12px;margin-right:6px;border-radius:4px;cursor:pointer;" data-id="${usuario.id}">Editar</button>
                            <button class="btn-eliminar" style="background:#e53935;color:#fff;border:none;padding:6px 14px;border-radius:4px;cursor:pointer;" data-id="${usuario.id}">Eliminar</button>
                        </td>
                    </tr>
                `;
            });
        } else {
            tbody.innerHTML = '<tr><td colspan="5">No hay usuarios registrados.</td></tr>';
        }

        // Delegación de eventos para eliminar y editar usuario
        tbody.addEventListener('click', async (e) => {
            // Eliminar usuario
            if (e.target.classList.contains('btn-eliminar')) {
                const id = e.target.getAttribute('data-id');
                if (confirm('¿Seguro que deseas eliminar este usuario?')) {
                    try {
                        const res = await fetch(`http://localhost:3000/api/auth/usuarios/${id}`, {
                            method: 'DELETE'
                        });
                        if (res.ok) {
                            e.target.closest('tr').remove();
                        } else {
                            alert('Error al eliminar usuario.');
                        }
                    } catch {
                        alert('Error de conexión al eliminar usuario.');
                    }
                }
            }
            // Editar usuario
            if (e.target.classList.contains('btn-editar')) {
                const row = e.target.closest('tr');
                const id = e.target.getAttribute('data-id');
                const nombre = row.children[1].textContent;
                const correo = row.children[2].textContent;
                const rol = row.children[3].textContent;

                // Crear formulario de edición en la misma fila
                row.innerHTML = `
                    <td>${id}</td>
                    <td><input type="text" value="${nombre}" id="edit-nombre" style="width:90%"></td>
                    <td><input type="email" value="${correo}" id="edit-correo" style="width:90%"></td>
                    <td><input type="text" value="${rol}" id="edit-rol" style="width:90%"></td>
                    <td>
                        <button class="btn-guardar" style="background:#4CAF50;color:#fff;border:none;padding:6px 12px;margin-right:6px;border-radius:4px;cursor:pointer;">Guardar</button>
                        <button class="btn-cancelar" style="background:#757575;color:#fff;border:none;padding:6px 12px;border-radius:4px;cursor:pointer;">Cancelar</button>
                    </td>
                `;

                // Guardar cambios
                row.querySelector('.btn-guardar').addEventListener('click', async () => {
                    const nuevoNombre = row.querySelector('#edit-nombre').value;
                    const nuevoCorreo = row.querySelector('#edit-correo').value;
                    const nuevoRol = row.querySelector('#edit-rol').value;
                    try {
                        const res = await fetch(`http://localhost:3000/api/auth/usuarios/${id}`, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ nombre_completo: nuevoNombre, email: nuevoCorreo, rol: nuevoRol })
                        });
                        if (res.ok) {
                            // Recargar la tabla para ver los cambios
                            location.reload();
                        } else {
                            alert('Error al actualizar usuario.');
                        }
                    } catch {
                        alert('Error de conexión al actualizar usuario.');
                    }
                });

                // Cancelar edición
                row.querySelector('.btn-cancelar').addEventListener('click', () => {
                    location.reload();
                });
            }
        });

    } catch (err) {
        console.error(err);
        tbody.innerHTML = '<tr><td colspan="5">Error al cargar usuarios.</td></tr>';
    }
});
