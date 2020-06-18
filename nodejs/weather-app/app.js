const config = require('./config');
const request = require('request');

const url = `http://api.weatherstack.com/current?access_key=${config.key}&query=${config.location}`;

request(
  {
    url: url,
    json: true,
  },
  (error, response) => {
    const data = response.body;
    const location = data.location;

    if (error) {
      console.log('No es posible conectarse con el servicio de clima :(');
    } else if (data.error) {
      console.log('No se encuentra esa localizacion.');
    } else {
      const time = location.localtime.split(' ');

      //  Log data
      console.log(
        `Ciudad: ${location.name}, ${location.region} - ${location.country}`
      );
      console.log(`Fecha: ${time[0]} - Hora: ${time[1]}`);
      console.log(`Temperatura: ${data.current.temperature}°C`);
      console.log(`Humedad: ${data.current.humidity}%`);
      console.log(`Precipitaciones: ${data.current.precip}%`);
      console.log(`Vientos a ${data.current.wind_speed} km/h`);
      //  Dont remove
    }
  }
);

const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${config.location}.json?access_token=${config.mapToken}&limit=1`;

request({ url: geocodeURL, json: true }, (error, response) => {
  const data = response.body;

  if (error) {
    console.log('No es posible conectarse al servicio.');
  } else if (data.features.length === 0) {
    console.log('La localizacion indicada no existe');
  } else {
    const latitude = data.features[0].center[0];
    const longitude = data.features[0].center[1];
    console.log(latitude, longitude);
  }
});
