function geocoderAdapter(location_query){
  var link = `https://maps.googleapis.com/maps/api/geocode/json?address=${location_query}&key=AIzaSyCi1C-M1xTJE97lk16r_qyINyd1jPii9W4`
  $.ajax({
    method: "GET",
    url: link
  }).done(function(response){
    var pos = response.results[0].geometry.location
    var address = response.results[0].address_components[0].long_name
    var mark = new Mark(pos, address)
    }
  )
}
