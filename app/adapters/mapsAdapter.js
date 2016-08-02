function mapsAdapter(){
  $.ajax({
    method: "GET",
    url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCi1C-M1xTJE97lk16r_qyINyd1jPii9W4&callback=initMap",
    crossDomain: true,
    dataType: 'jsonp'
  }).done(function(){

    var makemap = (function initMap() {
      var mapDiv = document.getElementById('map');
      var map = new google.maps.Map(mapDiv, {
          center: {"lat" : 34.0522342, "lng" : -118.2436849},
          zoom: 1
      }
    )
    store.map = map
    })();
  })
}
