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
    getForecast(response.data.city);
}

function searchCity(city) {
    let apiKey = `0bc5a8155a8t1ab5b31d93473cfdo8fc`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayResult);
}
function handleInput (event){
    event.preventDefault();
    let inputCity = document.querySelector("#input-city");
    searchCity(inputCity.value);

}
let form = document.querySelector("form");
form.addEventListener("submit", handleInput);

function getForecast (city){
    let apiKey = `0bc5a8155a8t1ab5b31d93473cfdo8fc`;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
}
function formatShortdate (timestamp){
    let day = new Date(timestamp * 1000 );
    let shortdays = [`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`, `Sat`];
    return shortdays[day.getDay()];
}

function displayForecast (response) {
let forecastContent = "";

response.data.daily.forEach (function (day, index) {
if (index < 5) {
    forecastContent = 
forecastContent + `
<div class="weather-forecast-day">
            <div class="weather-forecast-date">
            ${formatShortdate(day.time)}
            </div>
            <div>
            <img src = "${day.condition.icon_url}" class="weather-forecast-icon"/>
            </div>
            <div class="weather-forecast-temperatures">
              <div class="weather-forecast-temperature"><strong>${Math.round(day.temperature.maximum)}°</strong></div>
              <div class="weather-forecast-temperature">${Math.round(day.temperature.minimum)}°</div>
            </div>
          </div>
`;}
});
let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = forecastContent;
};
