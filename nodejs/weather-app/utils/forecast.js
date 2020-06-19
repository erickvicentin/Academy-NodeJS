const request = require('request');
const config = require('./config');

const forecast = (lat, lon, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${config.key}&query=${lat},${lon}`;

  request({ url, json: true }, (error, response) => {
    const data = response.body;
    const location = data.location;

    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (location.name === null) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      callback(undefined, {
        temperature: data.current.temperature,
        humidity: data.current.humidity,
        wind_speed: data.current.wind_speed,
      });
    }
  });
};

module.exports = forecast;
