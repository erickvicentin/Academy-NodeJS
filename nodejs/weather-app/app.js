const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
  console.log(`Por favor, ingrese un lugar para buscar.`);
} else {
  geocode(address, (geoError, { latitude, longitude, location }) => {
    if (geoError) {
      console.log(geoError);
    } else {
      console.log(`Localizacion: ${location}`);
      const lat = latitude.toFixed(2);
      const long = longitude.toFixed(2);

      forecast(
        lat,
        long,
        (forecastError, { temperature, humidity, wind_speed }) => {
          if (forecastError) {
            console.log(forecastError);
          } else {
            console.log(`
        Temperatura: ${temperature}°C
        Humedad: ${humidity}%
        Vientos a ${wind_speed} km/h`);
          }
        }
      );
    }
  });
}
