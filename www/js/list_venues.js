// Note: Removed js/ since we are using data-main
require(['venues'], function(venues) {
	for (x in venues) {
		var venue = venues[x];
		document.write([
			'<h2>', venue.name, '</h2>',
			'<p>',
			venue.address, '<br />',
			venue.city, ',', venue.state,
			'</p>'
		].join(' '));
	}
});
