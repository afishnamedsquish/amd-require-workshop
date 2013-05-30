define(function() {
	var venueListRenderer = function(venues) {
		this.venues = venues;
	};

	venueListRenderer.prototype.render = function() {
		var output = [];
		for (x in this.venues) {
			var venue = this.venues[x];
			output.push([
				'<h2>', venue.name, '</h2>',
				'<p>',
				venue.address, '<br />',
				venue.city, ',', venue.state,
				'</p>'
			].join(' '));
		}

		return output.join('');
	};

	return venueListRenderer;
});
