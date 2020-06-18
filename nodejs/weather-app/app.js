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
