var mapsController = (function () {
	var map

	function create() {
		var markerArr = [{"lat" : 34.0522342, "lng" : -80.2436849},{"lat" : 80.0522342, "lng" : -118.2436849}]
		theMap = new Mapped ({"lat" : 34.0522342, "lng" : -118.2436849},8)
		markerArr.forEach(createMarker)
		theMap.markers.forEach(setMarker)
		show()
	}

	function show() {
        new google.maps.Map(($('#map')[0]), {
            center: theMap.center,
            zoom: theMap.zoom
        });
	}

	function setMarker() {
		debugger
		new google.maps.Marker({
          position: this.position,
          map: this.map,
          title: this.title
        });
	}

	function createMarker() {
		new Mark (arguments[0],theMap,'YOU')
	}

	return {
		create,
		show
	}


}())
