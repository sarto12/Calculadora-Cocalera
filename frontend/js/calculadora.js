

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculadora-form');
    const resultadoText = document.getElementById('resultado-text');

    // Opciones de años (puedes ajustar el rango según tus datos)
    const anios = [
        2005, 2006, 2007, 2008, 2009, 2010, 2011,
        2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024
    ];

    // Opciones de regiones actualizadas
    const regiones = [
        'Sur de Bolívar',
        'Sierra Nevada',
        'Meta-Guaviare',
        'Putumayo-Caquetá',
        'Orinoquía',
        'Catatumbo',
        'Pacífico'
    ];

    // Crear select de año
    const selectAnio = document.createElement('select');
    selectAnio.id = 'anio';
    selectAnio.name = 'anio';
    selectAnio.required = true;
    selectAnio.innerHTML = '<option value="">Selecciona un año</option>' +
        anios.map(anio => `<option value="${anio}">${anio}</option>`).join('');

    // Crear select de región
    const selectRegion = document.createElement('select');
    selectRegion.id = 'region';
    selectRegion.name = 'region';
    selectRegion.required = true;
    selectRegion.innerHTML = '<option value="">Selecciona una región</option>' +
        regiones.map(region => `<option value="${region}">${region}</option>`).join('');

    // Insertar selects antes del input de área
    const areaInput = document.getElementById('area');
    form.insertBefore(selectAnio, areaInput.parentElement);
    form.insertBefore(selectRegion, areaInput.parentElement);

    // Modificar el label del área
    document.querySelector('label[for="area"]').textContent = 'Número de hectáreas:';

    // Lógica de cálculo (puedes personalizar según tus necesidades)
    document.getElementById('calcular-btn').addEventListener('click', function() {
        const anio = selectAnio.value;
        const region = selectRegion.value;
        const area = parseFloat(document.getElementById('area').value);
        if (!anio || !region || isNaN(area) || area <= 0) {
            resultadoText.textContent = 'Por favor, selecciona año, región y un número válido de hectáreas.';
            return;
        }

        
        if (anio === '2005' && (
            region === 'Sur de Bolívar' ||
            region === 'Sierra Nevada' ||
            region === 'Meta-Guaviare' ||
            region === 'Putumayo-Caquetá' ||
            region === 'Catatumbo' ||
            region === 'Orinoquía' ||
            region === 'Pacífico'
        )) {
            let COSECHAS_ANUALES, RENDIMIENTO_HOJA, VALOR_PROMEDIO_HOJA, GASTO_PROMEDIO_HOJA;
            let RENDIMIENTO_PASTA, VALOR_PROMEDIO_PASTA, GASTO_PROMEDIO_PASTA;
            let RENDIMIENTO_BASE, VALOR_PROMEDIO_BASE, GASTO_PROMEDIO_BASE;

            if (region === 'Sur de Bolívar') {
                COSECHAS_ANUALES = 3.3;
                RENDIMIENTO_HOJA = 1960;
                VALOR_PROMEDIO_HOJA = 2560;
                GASTO_PROMEDIO_HOJA = 318137.43;
                RENDIMIENTO_PASTA = 1.41;
                VALOR_PROMEDIO_PASTA = 2175000;
                GASTO_PROMEDIO_PASTA = 1468169.37;
                RENDIMIENTO_BASE = 1.41;
                VALOR_PROMEDIO_BASE = 2751000;
                GASTO_PROMEDIO_BASE = 1703369.37;
            } else if (region === 'Sierra Nevada') {
                COSECHAS_ANUALES = 3.4;
                RENDIMIENTO_HOJA = 1607;
                VALOR_PROMEDIO_HOJA = 1370;
                GASTO_PROMEDIO_HOJA = 298228.23;
                RENDIMIENTO_PASTA = 1.45;
                VALOR_PROMEDIO_PASTA = 2507000;
                GASTO_PROMEDIO_PASTA = 1185084.84;
                RENDIMIENTO_BASE = 1.45;
                VALOR_PROMEDIO_BASE = 2675000;
                GASTO_PROMEDIO_BASE = 1372605.12;
            } else if (region === 'Meta-Guaviare') {
                COSECHAS_ANUALES = 6.6;
                RENDIMIENTO_HOJA = 1489;
                VALOR_PROMEDIO_HOJA = 2470;
                GASTO_PROMEDIO_HOJA = 291573.03;
                RENDIMIENTO_PASTA = 1.53;
                VALOR_PROMEDIO_PASTA = 2183000;
                GASTO_PROMEDIO_PASTA = 1046269.46;
                RENDIMIENTO_BASE = 1.52;
                VALOR_PROMEDIO_BASE = 2550000;
                GASTO_PROMEDIO_BASE = 1218902.02;
            } else if (region === 'Putumayo-Caquetá') {
                COSECHAS_ANUALES = 4.5;
                RENDIMIENTO_HOJA = 1012;
                VALOR_PROMEDIO_HOJA = 2560;
                GASTO_PROMEDIO_HOJA = 264670.23;
                RENDIMIENTO_PASTA = 1.39;
                VALOR_PROMEDIO_PASTA = 2175000;
                GASTO_PROMEDIO_PASTA = 809702.92;
                RENDIMIENTO_BASE = 1.38;
                VALOR_PROMEDIO_BASE = 2751000;
                GASTO_PROMEDIO_BASE = 939650.33;
            } else if (region === 'Orinoquía') {
                COSECHAS_ANUALES = 5.4;
                RENDIMIENTO_HOJA = 1302;
                VALOR_PROMEDIO_HOJA = 2470;
                GASTO_PROMEDIO_HOJA = 281026.23;
                RENDIMIENTO_PASTA = 1.82;
                VALOR_PROMEDIO_PASTA = 2119000;
                GASTO_PROMEDIO_PASTA = 778671.45;
                RENDIMIENTO_BASE = 1.73;
                VALOR_PROMEDIO_BASE = 2295000;
                GASTO_PROMEDIO_BASE = 944945.14;
            } else if (region === 'Catatumbo') {
                COSECHAS_ANUALES = 4.5;
                RENDIMIENTO_HOJA = 1012;
                VALOR_PROMEDIO_HOJA = 2560;
                GASTO_PROMEDIO_HOJA = 264670.23;
                RENDIMIENTO_PASTA = 1.39;
                VALOR_PROMEDIO_PASTA = 2175000;
                GASTO_PROMEDIO_PASTA = 809702.92;
                RENDIMIENTO_BASE = 1.38;
                VALOR_PROMEDIO_BASE = 2751000;
                GASTO_PROMEDIO_BASE = 939650.33;
            } else if (region === 'Pacífico') {
                COSECHAS_ANUALES = 2.5;
                RENDIMIENTO_HOJA = 964;
                VALOR_PROMEDIO_HOJA = 3730;
                GASTO_PROMEDIO_HOJA = 261963.03;
                RENDIMIENTO_PASTA = 1.55;
                VALOR_PROMEDIO_PASTA = 2072000;
                GASTO_PROMEDIO_PASTA = 695262.97;
                RENDIMIENTO_BASE = 1.46;
                VALOR_PROMEDIO_BASE = 2271000;
                GASTO_PROMEDIO_BASE = 849840.00;
            }
            
            
            
            const ingresoHoja = area * COSECHAS_ANUALES * RENDIMIENTO_HOJA * VALOR_PROMEDIO_HOJA;
            const gastoHoja = area * COSECHAS_ANUALES * GASTO_PROMEDIO_HOJA;
            const utilidadHoja = ingresoHoja - gastoHoja;
            const ingresoPasta = area * COSECHAS_ANUALES * RENDIMIENTO_PASTA * VALOR_PROMEDIO_PASTA;
            const gastoPasta = area * COSECHAS_ANUALES * RENDIMIENTO_PASTA * GASTO_PROMEDIO_PASTA;
            const utilidadPasta = ingresoPasta - gastoPasta;
            const ingresoBase = area * COSECHAS_ANUALES * RENDIMIENTO_BASE * VALOR_PROMEDIO_BASE;
            const gastoBase = area * COSECHAS_ANUALES * RENDIMIENTO_BASE * GASTO_PROMEDIO_BASE;
            const utilidadBase = ingresoBase - gastoBase;

            resultadoText.innerHTML =
                `<strong>Año:</strong> ${anio}<br>` +
                `<strong>Región:</strong> ${region}<br>` +
                `<strong>Número de hectáreas:</strong> ${area}<br>` +
                `<strong>Ganancias anuales promedio (hoja):</strong> $${utilidadHoja.toLocaleString()}<br>` +
                `<strong>Ganancias anuales promedio (pasta):</strong> $${utilidadPasta.toLocaleString()}<br>` +
                `<strong>Ganancias anuales promedio (base):</strong> $${utilidadBase.toLocaleString()}`;
        } else {
            resultadoText.innerHTML = 'Solo hay datos disponibles para el año 2005 y las regiones Sur de Bolívar, Sierra Nevada, Meta-Guaviare, Putumayo-Caquetá, Orinoquía, Catatumbo y Pacífico.';
        }
    });
});
