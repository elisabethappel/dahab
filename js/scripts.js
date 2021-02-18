mapboxgl.accessToken = 'pk.eyJ1IjoiZWxpc2FiZXRoYXBwZWwiLCJhIjoiY2tsMTNnYTdmMmxhbjJvcW80a3M1cGQ2ZyJ9.zRFRv1-WLc3E43O5Klf8Jw';

var options = {
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v10', // style URL
    center: [34.526852,28.516690], // [lng, lat]
    zoom: 11.5
}


var map = new mapboxgl.Map(options);

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

var divingData = [
  {
    id: 'i',
    point: [34.5373, 28.5723],
    name: 'Blue Hole ثقب الأزرق',
    description:'The Blue Hole has anabundance of coral, including star coral, gorgonians, soft coral, black coral and anemones (with their colorful clown fish). You can also observe some giant sponges (elephant ear) before exiting the water to the western part of the Blue Hole. The Blue Hole is one of Dahab’s most famous dive sites and should definitely not be missed. '
  },
  {
    point: [34.520931,28.509351],
    name: 'Eel Garden البلو هول',
    description:'Eel Garden gets its name from the population of hundreds of Red Sea garden eels which inhabit the area. Eel garden is situated in Assalah bay, connected to the Lighthouse by a pedestrian walkway.'
  },
  {
    point: [34.522820,28.498335],
    name: 'Lighthouse',
    description:'The dive brings you to the furthest part of the bay descending to a depth of 25 meters. The Western side has a sandy bottom with hard coral towers, whilst the Eastern side follows the edge of the reef undulating over and through cracks caused by the 1995 earthquake.'
  },
  {
    point: [34.519901,28.495468],
    name: 'Mashraba',
    description:'Mashraba is home to a rich variety of fauna and flora. The sandy slope leads to a magnificent column of reef called Roman’s rock. Head south over some impressive formations before coming to a family of beautiful table coral at around 20 meters.'
  },
  {
    point: [34.513550,28.476602],
    name: 'Islands',
    description:'A series of three hard coral pools with sandy bottoms are situated after the small reef edge. This area consists of massive pore corals populated by numerous species, including snappers, groupers, black spotted pufferfish, as well as a school of yellowtail barracuda.'
  },
  {
    point: [34.507466,28.470271],
    name: 'Napoleon Reef',
    description: 'Napoleon Reef comes up from a sandy seabed at around 20 meters depth and is frequented by plentiful fauna and some napoleonfish (Cheilinus undulates) to whom this site owes its name.'
  }
]

divingData.forEach(function(d) {

  var html =  `
    <div><h4>${d.name}</h4>
    ${d.description} </div>
  `

var marker = new mapboxgl.Marker({
      color: "orange"
  })
  .setLngLat(d.point)
  .setPopup(new mapboxgl.Popup().setHTML(html)) // add popup
  .addTo(map)
})
