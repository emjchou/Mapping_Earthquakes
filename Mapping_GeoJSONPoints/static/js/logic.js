// add console.log to check if code is working
console.log("working");



// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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
    Street: streets,
    Dark: dark
}

// Create the map object with center, zoom level, and default layer.
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2, 
    layers: [streets]
});

// pass map layers to layer control and add layers control to map
L.control.layers(baseMaps).addTo(map);

// accessing airport jeoJSON URL
let airportData= "https://raw.githubusercontent.com/emjchou/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json";

// grabbing GeoJSON data with d3
d3.json(airportData).then(function(data){
    console.log(data);
    
    //console.log(data.features[0].properties)
    // for loop for popupMarkers
    for (index in data.features){
        let airportCode = data.features[index].properties.faa;
        let airportName = data.features[index].properties.name;

    L.geoJSON(data).bindPopup("<h1>Airport code: " + airportCode + "</h1><hr><h4>Airport name: " + airportName + "</h4>")
    .addTo(map)
}
    
    //create a FeoJSON layer with the retrieved data
    //L.geoJSON(data).addTo(map);
})


