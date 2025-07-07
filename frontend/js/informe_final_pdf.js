

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.informe-btn');
    btn.addEventListener('click', function() {
        const element = document.querySelector('.informe-container');
        const opt = {
            margin:       0.3,
            filename:     'informe_final.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(element).save();
    });
});
