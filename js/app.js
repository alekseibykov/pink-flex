function initMap() {
  var myLatLng = {lat: 59.936351, lng: 30.321097};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('google-map'), {
    center: myLatLng,
    scrollwheel: false,
    mapTypeControl: false,
    zoom: 17
  });

  var largeInfowindow = new google.maps.InfoWindow();

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    icon: 'img/google-map-marker.png',
    position: myLatLng,
    title: 'Наш адрес',
    animation: google.maps.Animation.DROP
  });

  marker.addListener('click', function() {
    largeInfowindow.marker = marker;
    largeInfowindow.setContent('<div>' + marker.title + '</div>');
    largeInfowindow.open(map, marker);
  });
}

google.maps.event.addDomListener(window, 'load', initMap);