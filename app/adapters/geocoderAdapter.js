function geocoderAdapter(location_query){
  $.ajax({
    method: "GET",
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location_query}&key=AIzaSyCi1C-M1xTJE97lk16r_qyINyd1jPii9W4`
  }).done(function(response){
    position = response.results[0].geometry.location
    name = response.results[0].address_components[0].long_name
    var mark = new Mark(position, name)
    store.markers.push(mark)
    }
  )
}
