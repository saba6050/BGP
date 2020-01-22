function initialize() {
	var myOptions = {
		zoom: 16,
		center: new google.maps.LatLng(41.724762, 44.777958),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: true,
		mapTypeControl: false,
		zoomControl: true,
		streetViewControl: false,
		}
	var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
	var marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(41.724762, 44.777958)
	});
	google.maps.event.addListener(marker, "click", function() {
		infowindow.open(map, marker);
	});
}
google.maps.event.addDomListener(window, 'load', initialize);