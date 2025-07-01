
const map = L.map('map').setView([4.570868, -74.297333], 6); 


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);


const marker = L.marker([4.570868, -74.297333]).addTo(map);


function updateMap() {
    const direccion = document.getElementById('direccion').value;
    if (direccion) {
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${direccion}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    const { lat, lon } = data[0];
                    map.setView([lat, lon], 15); 
                    marker.setLatLng([lat, lon]); 
                }
            })
            .catch(error => console.error('Error al buscar la dirección:', error));
    }
}