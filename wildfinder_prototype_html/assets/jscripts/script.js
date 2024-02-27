var map = L.map('map').setView([36.0694, -79.8079], 8.5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var guilford = L.polygon([
  [36.257281, -80.035469],
  [36.241326, -79.532397], 
  [35.899711, -79.542241], 
  [35.920735, -80.046613]
]).addTo(map);

var forsynth = L.polygon([
[36.261443, -80.451436], 
[36.257253, -80.035634], 
[36.011059, -80.043536], 
[36.026846, -80.213872], 
[35.996998, -80.213997], 
[35.996790, -80.322916], 
[35.990943, -80.323354], 
[35.991148, -80.344464], 
[35.974160, -80.395370], 
[36.064518, -80.464868], 
[36.045533, -80.488802], 
[36.092620, -80.514090],
[36.126799, -80.450306] 
]).addTo(map);

// Select all elements with the "i" tag and store them in a NodeList called "stars"
 const stars = document.querySelectorAll(".stars i");

 // Loop through the "stars" NodeList
 stars.forEach((star, index1) => {
   // Add an event listener that runs a function when the "click" event is triggered
   star.addEventListener("click", () => {
     // Loop through the "stars" NodeList Again
     stars.forEach((star, index2) => {
       // Add the "active" class to the clicked star and any stars with a lower index
       // and remove the "active" class from any stars with a higher index
       index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
     });
   });
 });
