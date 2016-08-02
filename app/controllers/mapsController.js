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

	 var infowindow = new google.maps.InfoWindow({
	    content: `<h3>${mark.user.username}</h3>
								<a href=${mark.user.url} target="_blank">
									<img src=${mark.user.avatar} height="40" width="40">
								</a>`
	  });

		var marker = new google.maps.Marker({
					position: mark.position,
          map: store.map,
					icon: octoCat
				});

				marker.addListener('click', function(){
					infowindow.open(store.map, marker)
				})

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
