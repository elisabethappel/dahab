mapboxgl.accessToken = 'pk.eyJ1IjoiZWxpc2FiZXRoYXBwZWwiLCJhIjoiY2tsMTNnYTdmMmxhbjJvcW80a3M1cGQ2ZyJ9.zRFRv1-WLc3E43O5Klf8Jw';

var options = {
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/satellite-v9', // style URL
    center: [34.526852,28.516690], // [lng, lat]
    zoom: 12
}


var map = new mapboxgl.Map(options);

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

var divingData = [
  {
    point: [34.5373, 28.5723],
    name: 'Blue Hole',
    title: 'ثقب الأزرق'
  },
  {
    point: [34.520931,28.509351],
    name: 'Eel Garden',
    title: 'البلو هول'
  },
  {
    point: [34.522820,28.498335],
    name: 'Lighthouse',
    title:''
  },
  {
    point: [34.519901,28.495468],
    name: 'Mashraba',
    title:''
  },
  {
    point: [34.513550,28.476602],
    name: 'Islands',
    title:''
  },
  {
    point: [34.503078,28.470414],
    name: 'Napoleon Reef',
    title:'',
    description: 'This site is situated a few hundred meters from the Islands by the sandy tongue that borders the north of the El-Qura bay. Napoleon Reef is best reached by boat or zodiac as it lies around 450 meters away from the beach. This huge madrepore tower is separated by a channel from the half-submerged reef: it comes up from a sandy seabed at around 20 meters depth and is frequented by plentiful fauna and some Napoleonfish (Cheilinus undulates) to whom this site owes its name.',
    image: '<img src="https://redsea-diving.com/wp-content/uploads/2020/07/a1111.jpg">'
  },
  {
    point: [34.505997,28.477055],
    name: 'Lagoon',
    title: 'ذا لاجون'
  }

]



divingData.forEach(function(d) {

  var html =  `
    <div><h4>${d.name}</h4>
    <h5>${d.title}</h5>
    <i> ${d.description} </i></div>
    ${d.image}
  `

new mapboxgl.Marker({
      color: "orange"
  })
  .setLngLat(d.point)
  .setPopup(new mapboxgl.Popup().setHTML(html)) // add popup
  .addTo(map);
})
