require.config({
	baseUrl: 'js',
	// Note: No .js!
	paths: {
		venues: "data/venues",
		venue_list_renderer: "app/venue_list_renderer",
		venue_mapper: "app/venue_mapper",
		jquery: "lib/jquery",
		gmaps: "lib/gmaps",
		async: "lib/async"
	},
	shim: {
		gmaps: {
            deps: ['async!http://maps.google.com/maps/api/js?sensor=false'],
			exports: 'GMaps'
		}
	}
});

require(['jquery', 'venues', 'venue_list_renderer', 'venue_mapper'], function($, venues, VenueListRenderer, VenueMapper) {
	var venueListRenderer = new VenueListRenderer(venues),
		$venueList = $('<div class="venue-list">').html(venueListRenderer.render()),
		venueMapper = new VenueMapper($('<div id="map-container"></div>').appendTo('body'));

	$venueList
		.hide()
		.appendTo('body')
		.fadeIn()
		.on('click', '[data-venue-id]', function(e) {
			var $heading = $(e.currentTarget),
				venue = venues[$heading.data('venue-id')];

			venueMapper.show(venue);
		});

});
