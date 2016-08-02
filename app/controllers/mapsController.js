var mapsController = (function () {
	var theMap

	function create() {
		var MapProperties = new Mapped ({"lat" : 34.0522342, "lng" : -118.2436849}, 4)
	}

	function show() {
			mapsAdapter()
	}

	function setMarker(mark) {
		var octoCat = {
				 path: 'https://developers.google.com/site-assets/logo-github.svg',
			 };

		new google.maps.Marker({
					position: mark.position,
          map: store.map,
					icon: 'logo-github.svg'
        });
	}

	function setAllMarkers() {
		store.marks.forEach(setMarker)
	}

	return {
		create,
		show,
		setMarker,
		setAllMarkers
	}


}())
