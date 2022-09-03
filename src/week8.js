
function showWeather(response){
    let temperature=document.querySelector("#temperature");
    temperature.innerHTML=Math.round(response.data.main.temp);
    let city=document.querySelector("#paris").value;
}
let apiKey="955ec84f44a61d66fe31b6cb729c8059";
let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
function clickMe(event){
    
    axios.get(url).then("showWeather");
}
let form =document.querySelector("#form");
form.addEventListener("submit",clickMe);