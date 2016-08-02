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
				 url: 'https://cdn0.iconfinder.com/data/icons/social-media-logos-pins-free/32/social_media_logo_github-64.png'
			 };

		new google.maps.Marker({
			position: mark.position,
  			map: store.map,
			icon: octoCat
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
