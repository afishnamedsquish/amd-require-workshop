define(['gmaps'], function(GMaps) {

	var VenueMapper = function(container) {
		this.container = container;
	};

	VenueMapper.prototype.map = null;

	VenueMapper.prototype.show = function(venue) {
		var _this = this;
		GMaps.geocode({
			address: venue.address + ' ' + venue.city + ', ' + venue.state,
			callback: function(results, status) {
				var latlng = results[0].geometry.location;
				if (!_this.map) {
					map = new GMaps({
						div: _this.container.get(0),
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
				_this.container.fadeIn();
			}
		});
	};

	return VenueMapper;
});
