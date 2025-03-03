const positions = [[-23.63572347544264, -46.575424427324556], [-23.636182895124662, -46.575177754704384], [-23.636866187797143, -46.57479543575711],[-23.63794243035193, -46.57504756339093], [-23.637425000000004, -46.57579976762641]
,[-23.636438628772012, -46.576720922936076] ,[-23.63701762813127, -46.57849703252827]] 

const map = L.map('map').setView(positions[0], 16);
const layer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {

    subdomains: 'abcd',
    minZoom:0,
	maxZoom: 20,
    ext: 'png'
});

layer.addTo(map);
const marker = L.marker(positions[0]);
marker.addTo(map);

L.marker(positions[positions.length-1]).addTo(map);

const polyline = L.polyline(positions,{color:'#000080'});
polyline.addTo(map);