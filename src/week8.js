function getForecast(coordinates){
let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
let url=`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
axios.get(url).then(changeForecast);
}
function callTemperature(response){
let wind= Math.round(response.data.wind.speed);
let knowWind=document.querySelector("#wind");
knowWind.innerHTML=wind;
console.log(response);
let humidity= Math.round(response.data.main.humidity);
let knowHumidity=document.querySelector("#humidity");
knowHumidity.innerHTML=humidity;
let temperature =Math.round(response.data.main.temp);
let knowDegree=document.querySelector("#temperature");
knowDegree.innerHTML=temperature;
document.querySelector("#paris").innerHTML = response.data.name;
let description= document.querySelector("#description");
description.innerHTML=response.data.weather[0].description;
findCelsius= Math.round(response.data.main.temp);
getForecast(response.data.coord);
let imageChange=document.querySelector("#cloudy");
imageChange.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
}
let now =new Date();
let minute=now.getMinutes();
if (minute<10){
  minute.innerHTML= `0${minute}`;
}else{
  minute.innerHTML=`minute`;
}
let hour=now.getHours();
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day=days[now.getDay()];
let tag=document.querySelector("#day");
tag.innerHTML=day;
let stunde=document.querySelector("#hour");
stunde.innerHTML=hour;
let minuten=document.querySelector("#minute");
minuten.innerHTML=minute;
function searchCity(event) {
  let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
  let city=document.querySelector("#name").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(callTemperature);
}

function search(event){
    event.preventDefault();
    let city =document.querySelector("#name").value;
    let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(callTemperature);
}
function changeForecast(response){
  let forCast= response.data.daily;
  let changeTime=document.querySelector("#projectForecast");
  let doubleNummer=`<div class="row" id="forecast-weather">`;
  forCast.forEach(function(forcastDay,index){
    if (index>0&&index<7){
  doubleNummer=doubleNummer + `
         <div class="col-2">
          <div class="weather-forecast-date">${formatDay(forcastDay.dt)}</div>
          <img src="http://openweathermap.org/img/wn/${forcastDay.weather[0].icon}@2x.png" alt="" width="42" />
          <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temperature-max">${Math.round(forcastDay.temp.max)}° </span>
            <span class="weather-forecast-temperature-min">${Math.round(forcastDay.temp.min)}°</span>
          </div>
      </div>`;
      }
  }); 
      doubleNummer= doubleNummer + `</div>`;
      changeTime.innerHTML=doubleNummer;
    }
function formatDay(timestamp){
  let date= new Date(timestamp *1000);
  let day= date.getDay();
  let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

  return days[day];

}
let form =document.querySelector("#form");
form.addEventListener("submit",search);
      function getCurrentPosition(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(searchlocation);
      }
        function searchlocation(position){
          debugger
          let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
          let apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
          axios.get(apiUrl).then(callTemperature);
        }
      let button = document.querySelector("#button");
      button.addEventListener("click", getCurrentPosition);
      