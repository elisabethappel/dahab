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
    name: 'Napolean Reef',
    title:''
  },
  {
    point: [34.505997,28.477055],
    name: 'Lagoon',
    title: 'ذا لاجون'
  }

]


divingData.forEach(function(d) {
  console.log(d.name, d.point)

  var html = `
  <div>
    <h4>${d.name}</h4>
    <div><i> ${d.title}</div>
  </div>
  `

new mapboxgl.Marker({
      color: "orange"
  })
  .setLngLat(d.point)
  .setPopup(new mapboxgl.Popup().setHTML(html)) // add popup
  .addTo(map);
})
