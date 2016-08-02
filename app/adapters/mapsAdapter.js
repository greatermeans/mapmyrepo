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
          center: {"lat" : 35.476325, "lng" : -7.631913},
          zoom: 2

      }
    )
    store.map = map
    })();
  })
}
