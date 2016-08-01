const Map = (function() {
  return class {
    constructor(center, markers, zoom) {
      this.center = center
      this.markers = []
      this.zoom = 8

      }

      initMap() {
        var mapDiv = document.getElementById('map');
        new google.maps.Map(mapDiv, {
            center: this.center,
            zoom: this.zoom
        });
      }
    }
  }());


function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
      center: {"lat" : 34.0522342, "lng" : -118.2436849},
      zoom: 8
  });
