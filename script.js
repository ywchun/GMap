var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 32.987716, lng: -96.751056 },
    zoom: 15
  });
}
