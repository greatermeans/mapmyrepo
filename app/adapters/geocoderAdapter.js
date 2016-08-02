function geocoderAdapter(user){
  var link = `https://maps.googleapis.com/maps/api/geocode/json?address=${user.location}&key=AIzaSyCi1C-M1xTJE97lk16r_qyINyd1jPii9W4`
  return $.ajax({
    method: "GET",
    url: link
  }).done(function(response){
    var pos = response.results[0].geometry.location
    var address = response.results[0].address_components[0].long_name
    return new Mark(pos, address)
    }
  )
}
