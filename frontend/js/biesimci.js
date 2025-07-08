function showPDFs(year) {
    const pdfContainer = document.getElementById('pdf-container');
    pdfContainer.innerHTML = ''; 

    const pdfs = {
        2024: ['../../censos_coca/2024/resumen_ejecutivo_simci_col2023_18102024_1.pdf'],
        2023: ['../../censos_coca/2023/ResumenEsp_EVOA2022.pdf', '../../censos_coca/2023/monitoring_of_territories_with_presence_of_coca_cultivation_2022_executive_summary.pdf','../../censos_coca/2023/informe_ejecutivo_2022.pdf','../../censos_coca/2023/informe_de_monitoreo_de_territorios_afectados_por_cultivos_ilicitos_2022.pdf '],
        2022: ['../../censos_coca/2022/documento_evoa_2021_en.pdf', '../../censos_coca/2022/documento_evoa_2021_es.pdf','../../censos_coca/2022/executive_summary_19102022.pdf','../../censos_coca/2022/informe_de_monitoreo_de_territorios_afectados_por_cultivos_ilicitos_2021.pdf','../../censos_coca/2022/informe_de_monitoreo_de_territorios_afectados_por_cultivos_ilicitos_2021.pdf','../../censos_coca/2022/resumen_ejecutivo_19102022.pdf','../../censos_coca/2022/survey_of_territories_affected_by_illegal_crops_2021_english.pdf'],
        2021: ['../../censos_coca/2021/evoa_2020_esp.pdf', '../../censos_coca/2021/informe_evoa_2020_-_inglés.pdf','../../censos_coca/2021/memoria_evento_mujeres_y_narcotráfico.pdf'],
        2020: ['../../censos_coca/2020/censo_2019.pdf', '../../censos_coca/2020/evoa_2019_esp.pdf','../../censos_coca/2020/evoa_2019_ing.pdf'],
        2019: ['../../censos_coca/2019/caracterizacion-agrocultural-del-cultivo-de-amapola.pdf', '../../censos_coca/2019/censo_2018.pdf','../../censos_coca/2019/colombia_explotacion_oro_aluvión_evoa_caracterizacion_departamento_nariño_2019.pdf','../../censos_coca/2019/estudio_las_mujeres_privadas_de_la_libertad_por_delitos_de_drogas.pdf','../../censos_coca/2019/evoa_2018_in.pdf','../../censos_coca/2019/evoa_2018.pdf','../../censos_coca/2019/modelo__informacion_inclusion_variable_minera_ordenamiento_municipal_regularizacion_actividades_exploracion_oro.pdf','../../censos_coca/2019/survey_of_territories_affected_by_illegal_crops_2018.pdf'],
        2018: ['../../censos_coca/2018/atlas-guapi-2017.pdf', '../../censos_coca/2018/caracterizacion-antioquia-oro.pdf','../../censos_coca/2018/censo_2017.pdf','../../censos_coca/2018/evoa-2016.pdf','../../censos_coca/2018/informe-guapi-2017.pdf'],
        2017: ['../../censos_coca/2017/censo_2016.pdf'],
        2016: ['../../censos_coca/2016/censo_2015.pdf', '../../censos_coca/2016/evoa-2014.pdf'],
        2015: ['../../censos_coca/2015/censo_2014.pdf'],
        2014: ['../../censos_coca/2014/censo_2013.pdf', '../../censos_coca/2014/estadisticas_municipales_2013.pdf','../../censos_coca/2014/multitemporal_2001_2012.pdf'],
        2013: ['../../censos_coca/2013/censo_2012.pdf', '../../censos_coca/2013/estadisticas_municipales_2012.pdf','../../censos_coca/2013/multitemporal_2010-2011.pdf'],
        2012: ['../../censos_coca/2012/censo_2011.pdf', '../../censos_coca/2012/estadisticas_municipales_2011.pdf'],
        2011: ['../../censos_coca/2011/censo_2010.pdf', '../../censos_coca/2011/estadisticas_municipales_2010.pdf','../../censos_coca/2011/multitemporal_2009_2010.pdf','../../censos_coca/2011/productividad_pacifico_2009_2010.pdf'],
        2010: ['../../censos_coca/2010/censo_2009.pdf', '../../censos_coca/2010/colombia-censo-2009-web.pdf', '../../censos_coca/2010/estadisticas_municipales_2009.pdf', '../../censos_coca/2010/multitemporal_2008_2009.pdf'],
        2009: ['../../censos_coca/2009/censo_2008.pdf', '../../censos_coca/2009/estadisticas_municipales_2008.pdf','../../censos_coca/2009/multitemporal_2007_2008.pdf'],
        2008: ['../../censos_coca/2008/censo_2007.pdf', '../../censos_coca/2008/estadisticas_municipales_2007.pdf','../../censos_coca/2008/multitemporal_2006_2007.pdf'],
        2007: ['../../censos_coca/2007/censo_2006.pdf', '../../censos_coca/2007/censo_cultivos_coca_andino_2006.pdf','../../censos_coca/2007/estadisticas_municipales_2006.pdf','../../censos_coca/2007/multitemporal_2005_2006.pdf'],
        2006: ['../../censos_coca/2006/censo_2005.pdf', '../../censos_coca/2006/estadisticas_municipales_2005.pdf','../../censos_coca/2006/multitemporal_2004_2005.pdf'],
        2005: ['../../censos_coca/2005/censo_2004.pdf', '../../censos_coca/2005/estadisticas_municipales_2004.pdf','../../censos_coca/2005/multitemporal_2003_2004.pdf','../../censos_coca/2005/multitemporal_parques_0104.pdf'],
        2004: ['../../censos_coca/2004/censo_2003.pdf', '../../censos_coca/2004/estadisticas_municipales_2003.pdf','../../censos_coca/2004/multitemporal_2002_2003.pdf'],
        2003: ['../../censos_coca/2003/censo_2002.pdf', '../../censos_coca/2003/estadisticas_municipales_2002.pdf'],
        2002: ['../../censos_coca/2002/estadisticas_municipales_2001.pdf'],
    };

    // Mostrar miniatura y enlace de todos los PDFs del año seleccionado
    const pdfList = pdfs[year];
    if (pdfList && pdfList.length > 0) {
        pdfList.forEach((pdfPath, idx) => {
            const pdfWrapper = document.createElement('div');
            pdfWrapper.style.marginBottom = '30px';
            pdfWrapper.style.textAlign = 'center';

            // Título del PDF
            const title = document.createElement('div');
            title.textContent = `Documento ${idx + 1}`;
            title.style.fontWeight = 'bold';
            title.style.marginBottom = '8px';
            pdfWrapper.appendChild(title);

            // Canvas para mostrar la miniatura
            const canvas = document.createElement('canvas');
            canvas.style.width = '220px';
            canvas.style.height = 'auto';
            canvas.style.cursor = 'pointer';
            canvas.style.display = 'block';
            canvas.style.margin = '0 auto 10px';
            canvas.style.border = '1px solid #ccc';
            canvas.style.borderRadius = '6px';
            canvas.title = 'Haz clic para ver el PDF completo';

            // Cargar PDF y mostrar miniatura
            if (typeof pdfjsLib === 'undefined') {
                pdfContainer.innerHTML = '<p style="color:red">No se ha cargado PDF.js correctamente.</p>';
                return;
            }
            pdfjsLib.getDocument(pdfPath).promise.then(pdf => {
                pdf.getPage(1).then(page => {
                    const viewport = page.getViewport({ scale: 0.4 });
                    const context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    const renderContext = {
                        canvasContext: context,
                        viewport: viewport
                    };
                    page.render(renderContext);
                });
            }).catch(error => {
                console.error('Error al cargar el PDF:', error);
                pdfWrapper.appendChild(document.createElement('br'));
                const errorMsg = document.createElement('div');
                errorMsg.innerHTML = '<p style="color:red">No se pudo cargar la carátula del PDF.</p>';
                pdfWrapper.appendChild(errorMsg);
            });

            // Al hacer clic en la miniatura, abrir el PDF en una nueva pestaña
            canvas.onclick = () => {
                window.open(pdfPath, '_blank');
            };

            pdfWrapper.appendChild(canvas);
            pdfContainer.appendChild(pdfWrapper);
        });
    } else {
        pdfContainer.innerHTML = '<p>No hay documentos disponibles para este año.</p>';
    }
}
