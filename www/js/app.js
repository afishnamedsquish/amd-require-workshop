require.config({
	baseUrl: 'js',
	// Note: No .js!
	paths: {
		venues: "data/venues",
		venue_list_renderer: "app/venue_list_renderer",
		jquery: "lib/jquery",
		gmaps: "lib/gmaps",
		async: "lib/async"
	}
});

require(['jquery', 'venues', 'venue_list_renderer', 'gmaps'], function($, venues, VenueListRenderer, GMaps) {
	var venueListRenderer = new VenueListRenderer(venues),
		$venueList = $('<div class="venue-list">').html(venueListRenderer.render()),
		mapContainer = $('<div id="map-container"></div>').appendTo('body'),
		showVenueMenu,
		venueMarker,
		map;

	$venueList
		.hide()
		.appendTo('body')
		.fadeIn()
		.on('click', '[data-venue-id]', function(e) {
			var $heading = $(e.currentTarget),
				venue = venues[$heading.data('venue-id')];

			showVenueMap(venue);
		});
	
	showVenueMap = function(venue) {
		GMaps.geocode({
			address: venue.address + ' ' + venue.city + ', ' + venue.state,
			callback: function(results, status) {
				var latlng = results[0].geometry.location;
				if (!map) {
					map = new GMaps({
						div: '#map-container',
						lat: latlng.lat(),
						lng: latlng.lng()
					});
				} else {
					map.setCenter(latlng.lat(), latlng.lng());
				}
				map.removeMarkers();
				map.addMarker({
					lat: latlng.lat(),
					lng: latlng.lng(),
					title: venue.name
				});
				mapContainer.fadeIn();
			}
		});

	};
	
});
