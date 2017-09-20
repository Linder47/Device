function initMap() {
    var coordinates = { lat: 34.866910, lng: -111.792495 },
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: coordinates
    }),
  
    marker = new google.maps.Marker({
        position: coordinates,
        map: map
      });
  }