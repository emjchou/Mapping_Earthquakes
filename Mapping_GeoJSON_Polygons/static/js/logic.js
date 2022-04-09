// add console.log to check if code is working
console.log("working");



// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// create dart view tile layer for map option
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// create a base layer that holds both maps
let baseMaps = {
    Streets: streets,
    SatelliteStreets: satelliteStreets
}

// Create the map object with center, zoom level, and default layer.
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11, 
    layers: [streets]
});

// pass map layers to layer control and add layers control to map
L.control.layers(baseMaps).addTo(map);

// add variable with GetJSON URL
let torontoHoods = "https://raw.githubusercontent.com/emjchou/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json";

// create style for lines
let myStyle = {
    color: "#ffffa1",
    weight: 2
}

// grabbing GeoJSON data with d3
// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
    L.geoJSON(data, {
        lineColor: "blue",
        weight: 1,
        fillColor: "yellow"
    })
    .bindPopup()
    .addTo(map)
});

