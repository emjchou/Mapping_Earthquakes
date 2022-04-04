// add console.log to check if code is working
console.log("working");

// create map object w a center and zoom level
let map = L.map("mapid").setView([40.7, -94.5], 4);

// add a marker to the map for LA
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// add a circle to the map for LA
//L.circle([34.0522, -118.2437], {
//    radius: 100
//}).addTo(map)

// add light yellow circle with black line and 300m radius of LA on dark map
L.circle([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: "yellow",
    fillOpacity: "0.5"
}).addTo(map)

//L.circleMarker([34.0522, -118.2437]).addTo(map)

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
// add our "graymap" tile layer to map
streets.addTo(map);
