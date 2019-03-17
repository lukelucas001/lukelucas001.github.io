let WeatherArray = [];
var weather;
const URL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=d18c2ca419b1a2b342fcf01acd72c780&units=imperial";
var webRequest = new XMLHttpRequest();
webRequest.open("GET", URL, true);
webRequest.responseType= "json";
webRequest.send();
webRequest.onload = function() {
    weather = webRequest.response.wind;

    var weatherSummary = getWeatherData
    document.getElementById("currentTemp").innerText = " " + getWeatherData.currentTemp;
    document.getElementById("highTemp").innerText = " " + getWeatherData.highTemp;
    document.getElementById("windChill").innerText = " " + getWeatherData.windChill;
    document.getElementById("humidity").innerText = " " + getWeatherData.humidity;
    document.getElementById("windSpeed").innerText = " " + getWeatherData.windSpeed;
    
};
function getWeatherData(weatherData) {

    for (index in weather) {
        if (weather[index].name.toUpperCase() === weatherData.toUpperCase()) {
            return weather[index];
        }
    }
}

