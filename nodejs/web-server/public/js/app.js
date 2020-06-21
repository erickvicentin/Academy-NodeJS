console.log('Client side javascript file is loaded!');

fetch('http://localhost:3000/weather?address=Resistencia').then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.location);
      console.log(`Temperatura: ${data.forecast.temperature}°C`);
      console.log(`Humedad: ${data.forecast.humidity}%`);
      console.log(`Vientos a: ${data.forecast.wind_speed} km/h`);
    }
  });
});
