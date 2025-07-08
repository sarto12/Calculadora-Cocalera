async function enviarFormulario(event) {
    event.preventDefault(); // evitar que recargue la página

    const datos = {
        nombre: document.getElementById('nombre').value,
        identificacion: document.getElementById('identificacion').value,
        edad: document.getElementById('edad').value,
        genero: document.getElementById('genero').value,
        etnia: document.getElementById('etnia').value,
        nivel_educativo: document.getElementById('nivel_educativo').value,
        telefono: document.getElementById('telefono').value,
        correo: document.getElementById('correo').value,
        familiares: document.getElementById('familiares').value,
        region: document.getElementById('region').value,
        departamento: document.getElementById('departamento').value,
        municipio: document.getElementById('municipio').value,
        vereda: document.getElementById('vereda').value,
        extension: document.getElementById('extension').value,
        transformacion: document.getElementById('transformacion').value,
        anio: document.getElementById('anio').value
    };

    try {
        const respuesta = await fetch('http://localhost:3000/api/registrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        const resultado = await respuesta.json();

        if (respuesta.ok) {
            alert('✅ Datos guardados exitosamente');
            document.getElementById('formularioSolicitud').reset();
        } else {
            alert('❌ Error al guardar: ' + resultado.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('❌ Error de red al intentar enviar el formulario');
    }
}