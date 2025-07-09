async function enviarFormulario(event) {
    event.preventDefault(); // evitar que recargue la página

    const datos = {
        nombre_completo: document.getElementById('nombres').value,
        identificacion: document.getElementById('identificacion').value,
        edad: document.getElementById('edad').value,
        genero: document.getElementById('genero').value,
        pertenencia_etnica: document.getElementById('pertenencia_etnica').value,
        nivel_educativo: document.getElementById('nivel_educativo').value,
        telefono: document.getElementById('telefono').value,
        correo: document.getElementById('correo').value,
        datos_familiares: document.getElementById('datos_familiares').value,
        region: document.getElementById('region').value,
        departamento: document.getElementById('departamento').value,
        municipio: document.getElementById('municipio').value,
        vereda: document.getElementById('vereda').value,
        extension_ha: document.getElementById('extension_ha').value,
        tipo_transformacion: document.getElementById('tipo_transformacion').value,
        anio_despojo: document.getElementById('anio_despojo').value
    };

    try {
        const respuesta = await fetch('http://localhost:3000/api/registro/formulario', {
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