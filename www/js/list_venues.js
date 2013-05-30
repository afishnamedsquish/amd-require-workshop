require(['js/venues'], function(venues) {
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
