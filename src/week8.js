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
let description= document.querySelector("#description");
description.innerHTML=response.data.weather[0].description;
findCelsius= Math.round(response.data.main.temp);
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
  let apiKey = "955ec84f44a61d66fe31b6cb729c8059";
  let city=document.querySelector("#name").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(callTemperature);
}
function search(event){
    event.preventDefault();
    let city =document.querySelector("#name").value;
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
      function searchTemperature(event){
        event.preventDefault();
        let calTemperature=(findCelsius * 9)/ 5 + 32 ;
        let searchCelsius=document.querySelector("#temperature");
        searchCelsius.innerHTML=Math.round(callTemperature);

      }
      let findCelsius="null";
      function searchConversion(event){
        event.preventDefault();
        let searchCelsius=document.querySelector("#temperature");
        searchCelsius.innerHTML=Math.round(callTemperature);
      }

      let fahren =document.querySelector("#fahren");
      fahren.addEventListener("click",searchTemperature);
      let celsiusLink=document.querySelector("#celsius");
      celsiusLink.addEventListener("click",searchConversion);