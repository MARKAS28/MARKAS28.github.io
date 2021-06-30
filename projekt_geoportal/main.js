var mymap = L.map("map").setView([52, 19], 10);

mymap.locate({ setView: true, maZoom: 12 });

var lyrOSM = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png");

lyrOpentopo = L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png'),

  lyrGoogleHyb = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'),

  lyrGoogleR = L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'),

  mymap.addLayer(lyrOSM);

var baseMaps = {
  "Openstreetmap": lyrOSM,
  "Google Road": lyrGoogleR,
  "OpenTopoMap": lyrOpentopo,
  "Google Satelita": lyrGoogleHyb,
};

lyrhydro = L.tileLayer.wms("http://localhost:8080/geoserver/prge_marunia/wms",
  {
    layers: "prge_marunia:budowle_hydro",
    format: 'image/png',
    transparent: 'true',
    version: '1.1.1'
  });


lyrkol = L.tileLayer.wms("http://localhost:8080/geoserver/prge_marunia/wms",
  {
    layers: "prge_marunia:koleje",
    format: 'image/png',
    transparent: 'true',
    version: '1.1.1'
  });

lyrzab = L.tileLayer.wms("http://localhost:8080/geoserver/prge_marunia/wms",
  {
    layers: "prge_marunia:zabudowa ",
    format: 'image/png',
    transparent: 'true',
    version: '1.1.1'
  });

var overlays = {
  "Budowle hydro": lyrhydro,
  "Koleje": lyrkol,
  "Miejscowości": lyrzab
};

L.control.layers(baseMaps, overlays).addTo(mymap);


