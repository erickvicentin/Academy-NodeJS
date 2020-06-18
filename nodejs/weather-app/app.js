const config = require('./config');
const request = require('request');

const url = `http://api.weatherstack.com/current?access_key=${config.key}&query=${config.location}`;

request(
  {
    url: url,
    json: true,
  },
  (error, response) => {
    const data = response.body.current;
    const location = response.body.location;
    const time = location.localtime.split(' ');

    //  Log data
    console.log(
      `Ciudad: ${location.name}, ${location.region} - ${location.country}`
    );
    console.log(`Fecha: ${time[0]} - Hora: ${time[1]}`);

    console.log(`Temperatura: ${data.temperature}°C`);
    console.log(`Humedad: ${data.humidity}%`);
    console.log(`Precipitaciones: ${data.precip}%`);
    console.log(`Vientos a ${data.wind_speed} km/h`);
    //  Dont remove
  }
);

const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Resistencia.json?access_token=${config.token}&limit=1`;

request({ url: geocodeURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[0];
  const longitude = response.body.features[0].center[1];
  console.log(`Latitud: ${latitude}, Longitud: ${longitude}`);
  console.log(response.body.features[0].place_name);
});
