// add console.log to check if code is working
console.log("working");



// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// create dart view tile layer for map option
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// create a base layer that holds both maps
let baseMaps = {
    Light: light,
    Dark: dark
}

// Create the map object with center, zoom level, and default layer.
let map = L.map('mapid', {
    center: [44.0, -80.0],
    zoom: 2, 
    layers: [dark]
});

// pass map layers to layer control and add layers control to map
L.control.layers(baseMaps).addTo(map);

// add variable with GetJSON URL
let torontoData ="https://raw.githubusercontent.com/emjchou/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/torontoRoutes.json"

// accessing airport jeoJSON URL
//let airportData= "https://raw.githubusercontent.com/emjchou/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json";

// create style for lines
let myStyle = {
    color: "#ffffa1",
    weight: 2
}

// grabbing GeoJSON data with d3
// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
      style: myStyle,
      onEachFeature: function(feature, layer){
          layer.bindPopup("<h3>Airline: " + feature.properties.airline + "</h3><hr><h3>Destination: " + 
          feature.properties.dst + "</h3>")
      }
  }).addTo(map);
});

