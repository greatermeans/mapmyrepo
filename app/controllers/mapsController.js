var mapsController = (function () {
	var theMap

	function create() {

		var markerArr = [{"lat" : 34.0522342, "lng" : -80.2436849},{"lat" : 80.0522342, "lng" : -118.2436849}]
		var MapProperties = new Mapped ({"lat" : 34.0522342, "lng" : -118.2436849},8, markerArr)
		markerArr.forEach(createMarker)
		show()
		theMap.markers.forEach(setMarker)
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
          map: theMap,
          // title: this.title
        });
	}

	function createMarker() {
		debugger
		var mark = new Mark (arguments[0])
		store.markers.push(mark)
	}

	return {
		create,
		show
	}


}())
