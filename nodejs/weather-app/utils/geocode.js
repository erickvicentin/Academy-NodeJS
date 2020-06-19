const request = require('request');
const config = require('./config');

const geocode = (address, callback) => {
  const location = encodeURIComponent(address);
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${config.mapToken}&limit=1`;

  request({ url: url, json: true }, (error, response) => {
    const geoData = response.body.features[0];

    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (response.body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      callback(undefined, {
        location: geoData.place_name,
        latitude: geoData.center[1],
        longitude: geoData.center[0],
      });
    }
  });
};

module.exports = geocode;
