console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const weather_title = document.querySelector("#message-1");
const hour_title = document.querySelector("#message-2");
const temperature_title = document.querySelector("#message-3");
const humidity_title = document.querySelector("#message-4");
const wind_speed_title = document.querySelector("#message-5");
const precip_title = document.querySelector("#message-6");
const desc_title = document.querySelector("#message-7");
const weather_img = document.querySelector("#weather_img");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  weather_title.textContent = "Loading data...";
  temperature_title.textContent = "";
  humidity_title.textContent = "";
  wind_speed_title.textContent = "";
  hour_title.textContent = "";
  precip_title.textContent = "";
  desc_title.textContent = "";

  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        weather_title.textContent = `${data.error}`;
      } else {
        const dataTime = data.forecast.time.split(" ")[1];

        weather_img.src = `${data.forecast.icon}`;
        weather_title.textContent = `Weather on ${data.location}`;
        hour_title.textContent = `Weather data of the city at ${dataTime}`;
        temperature_title.textContent = `Current temperature of ${data.forecast.temperature} ° C.`;
        humidity_title.textContent = `Humidity at ${data.forecast.humidity}%`;
        wind_speed_title.textContent = `Winds at a speed of ${data.forecast.wind_speed} km/h`;
        precip_title.textContent = `Precipitations chance of ${data.forecast.precip}%`;
        desc_title.textContent = `Visibility of ${data.forecast.visibility}%. Sky status: ${data.forecast.description} `;
      }
    });
  });
});
