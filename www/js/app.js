require.config({
	baseUrl: 'js',
	// Note: No .js!
	paths: {
		venues: "data/venues",
		venue_list_renderer: "app/venue_list_renderer",
		jquery: "lib/jquery"
	}
});

require(['jquery', 'venues', 'venue_list_renderer'], function($, venues, VenueListRenderer) {
	var venueListRenderer = new VenueListRenderer(venues),
		$venueList = $(venueListRenderer.render());

	$venueList
		.hide()
		.appendTo('body')
		.fadeIn();
});
