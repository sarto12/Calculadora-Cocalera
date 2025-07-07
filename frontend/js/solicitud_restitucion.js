
document.addEventListener('DOMContentLoaded', function() {
    const regionSelect = document.getElementById('region');
    const mapContainer = document.querySelector('.solicitud-map');
    let regionLabel = document.createElement('div');
    regionLabel.className = 'region-label';
    mapContainer.appendChild(regionLabel);

    function updateRegionLabel() {
        const selected = regionSelect.options[regionSelect.selectedIndex];
        if (regionSelect.value && regionSelect.value !== 'Seleccionar') {
            regionLabel.textContent = selected.text;
            regionLabel.style.display = 'block';
        } else {
            regionLabel.textContent = '';
            regionLabel.style.display = 'none';
        }
    }

    regionSelect.addEventListener('change', updateRegionLabel);
    updateRegionLabel();
});
