var mapsController = (function () {
	var theMap

	function create() {
		var MapProperties = new Mapped ({"lat" : 34.0522342, "lng" : -118.2436849}, 4)
	}

	function show() {
			mapsAdapter()
	}

	function setMarker(mark) {
		let image = {
    		url: mark.avatar,
    // This marker is 20 pixels wide by 32 pixels high.
    		size: new google.maps.Size(50, 50),
    	// The origin for this image is (0, 0).

    // The anchor for this image is the base of the flagpole at (0, 32).
  		};

		new google.maps.Marker({
			position: mark.position,
          	map: store.map,
			icon: image
					// title: mark.title
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
