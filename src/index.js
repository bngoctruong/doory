function searchCity(city){
    let apiKey = "0bc5a8155a8t1ab5b31d93473cfdo8fc";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
console.log(apiURL);
}
let currentDay = document.querySelector("p .current-day");
let currentTime = document.querySelector("p .current-time");
let now = new Date();
let days = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`];
currentDay.innerHTML = days[now.getDay()];
let formattedHour = now.getHours();
let formattedMin = now.getMinutes();
currentTime.innerHTML = `${formattedHour}:${formattedMin}`;


function inputCity(event) {
  event.preventDefault();
  let myCity = document.querySelector("#input-city");
  let currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = myCity.value;
}
let form = document.querySelector("form");
form.addEventListener("submit", inputCity);
