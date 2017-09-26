function initMap() {
    var coordinates = { lat: 55.687104, lng: 37.529618 },
    map = new google.maps.Map(document.getElementById('google-map'), {
      zoom: 17,
      center: coordinates
    }),
  
    marker = new google.maps.Marker({
        position: coordinates,
        map: map
      });
  }

  var buttonMapClose = document.querySelector(".map-popup__btn-close");
  var mapPopup = document.querySelector(".map-popup");
  var mapImage = document.querySelector("#map");
  var writeUsPopup = document.querySelector(".write-us-popup");
  var buttonWriteUsClose = document.querySelector(".write-us-popup__btn-close");
  var buttonWriteUs = document.querySelector(".btn--write-us");

  buttonMapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("map-popup--close");
  });

mapImage.addEventListener("click", function(event) {
    event.preventDefault();
    if (mapPopup.classList.contains("map-popup--close")) {
    mapPopup.classList.remove("map-popup--close");
    } else {
      mapPopup.classList.add("map-popup--close");
    }
  });

  buttonWriteUsClose.addEventListener("click", function(event) {
    event.preventDefault();
    writeUsPopup.classList.add("write-us-popup--close");
  });

  buttonWriteUs.addEventListener("click", function(event) {
    event.preventDefault();
    writeUsPopup.classList.remove("write-us-popup--close");
  });