function displayResult(response) {
  let cityElement = document.querySelector(".current-city");
  let tempElement = document.querySelector("#current-temperature-value");
  let conditionElement = document.querySelector(".condition");
  let humidityElement = document.querySelector(".humidity");
  let windElement = document.querySelector(".wind-speed");
  let iconElement = document.querySelector("#icon");
 
  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = Math.round(response.data.temperature.current);
  conditionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  iconElement.innerHTML = `<img
                class="current-temperature-icon"
                src="${response.data.condition.icon_url}">`; 
}

function searchCity(event) {
    event.preventDefault();
    let inputCity = document.querySelector("#input-city");
    let city = inputCity.value;
    let apiKey = `0bc5a8155a8t1ab5b31d93473cfdo8fc`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayResult);
}

let form = document.querySelector("form");
form.addEventListener("submit", searchCity);

let currentDay = document.querySelector("p .current-day");
let currentTime = document.querySelector("p .current-time");
let now = new Date();
let days = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`,`Saturday`];
currentDay.innerHTML = days[now.getDay()];
let formattedHour = now.getHours();
let formattedMin = now.getMinutes();
if (formattedMin <10) {
    formattedMin = `0${formattedMin}`;
}
currentTime.innerHTML = `${formattedHour}:${formattedMin}`;

function displayForecast () {
let shortdays = [`Mon`,`Tue`,`Wed`,`Thu`,`Fri`];
let forecastContent = "";

shortdays.forEach (function (shortday) {
forecastContent = 
forecastContent + `
<div class="weather-forcast-day">
            <div class="weather-forecast-date">
            ${shortday}
            </div>
            <div class="weather-forecast-icon">
            ⛅
            </div>
            <div class="weather-forecast-temperatures">
              <div class="weather-forecast-temperature"><strong>15°</strong></div>
              <div class="weather-forecast-temperature">9°</div>
            </div>
          </div>
`;
});
let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = forecastContent;
};
displayForecast();