function callTemperature(response){
let wind= Math.round(response.data.wind.speed);
let knowWind=document.querySelector("#wind");
knowWind.innerHTML=wind;
let humidity= Math.round(response.data.main.humidity);
let knowHumidity=document.querySelector("#humidity");
knowHumidity.innerHTML=humidity;
let temperature =Math.round(response.data.main.temp);
let knowDegree=document.querySelector("#temperature");
knowDegree.innerHTML=temperature;
document.querySelector("#paris").innerHTML = response.data.name;
}
let now =new Date();
let minute=now.getMinutes();
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
  let apiKey = "955ec84f44a61d66fe31b6cb729c8059";
  let city=document.querySelector("#name");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(callTemperature);
}
function search(event){
    event.preventDefault();
    let city =document.querySelector("#some");
    let apiKey = "955ec84f44a61d66fe31b6cb729c8059";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(callTemperature);
}
let form =document.querySelector("#form");
form.addEventListener("submit",search);
      function getCurrentPosition(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(searchlocation);
      }
        function searchlocation(position){
          debugger
          let apiKey = "955ec84f44a61d66fe31b6cb729c8059";
          let apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
          axios.get(apiUrl).then(callTemperature);
        }
      let button = document.querySelector("#button");
      button.addEventListener("click", getCurrentPosition);