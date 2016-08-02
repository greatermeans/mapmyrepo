var mapsController = (function () {
	var theMap

	function create() {

		// var markerArr = [{"lat" : 34.0522342, "lng" : -80.2436849},{"lat" : 80.0522342, "lng" : -118.2436849}]
		var MapProperties = new Mapped ({"lat" : 34.0522342, "lng" : -118.2436849}, 4)
		// markerArr.forEach(createMarker) THIS IS NOW in the GEOCODER ADAPTER

		// show()
		// theMap.markers.forEach(setMarker)
	}

	function show() {
			mapsAdapter()

			// theMap = new google.maps.Map(($('#map')[0]), {
      //       center: {lat: 44.540, lng: -78.546},
      //       zoom: 4
      //   });
	}

	function setMarker(mark) {
		var octoCat = {
				 path: 'https://developers.google.com/site-assets/logo-github.svg',
			 };

		new google.maps.Marker({
					position: mark.position,
          map: store.map,
					icon: 'logo-github.svg'
          // title: mark.title
        });
	}

	function setAllMarkers() {
		store.marks.forEach(setMarker)
	}

	// function createMarker() {
	// 	debugger
	// 	var mark = new Mark (arguments[0])
	// 	store.markers.push(mark)
	// }

	return {
		create,
		show,
		setMarker,
		setAllMarkers
	}


}())
