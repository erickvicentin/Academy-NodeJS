const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Resistencia', (geoError, geoData) => {
  if (geoError) {
    console.log(geoError);
  } else {
    console.log(`Localizacion: ${geoData.location}`);
    const lat = geoData.latitude.toFixed(2);
    const long = geoData.longitude.toFixed(2);

    forecast(lat, long, (forecastError, forecastData) => {
      if (forecastError) {
        console.log(forecastError);
      } else {
        console.log(`
        Temperatura: ${forecastData.temperature}°C
        Humedad: ${forecastData.humidity}%
        Vientos a ${forecastData.wind_speed} km/h`);
      }
    });
  }
});
