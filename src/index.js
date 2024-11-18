function getWeather(response) {
 
}

function displayResult(response) {
  let cityElement = document.querySelector(".current-city");
  cityElement.innerHTML = response.data.city;
  let tempElement = document.querySelector("#current-temperature-value");
 tempElement.innerHTML = Math.round(response.data.temperature.current);
 let conditionElement = document.querySelector(".condition");
 conditionElement.innerHTML = response.data.condition.description;
let humidityElement = document.querySelector(".humidity");
 humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
let windElement = document.querySelector(".wind-speed");
 windElement.innerHTML = `${response.data.wind.speed}km/h`;
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
let days = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`];
currentDay.innerHTML = days[now.getDay()];
let formattedHour = now.getHours();
let formattedMin = now.getMinutes();
currentTime.innerHTML = `${formattedHour}:${formattedMin}`;

