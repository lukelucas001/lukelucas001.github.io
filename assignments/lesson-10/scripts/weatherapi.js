// let WeatherArray = [];
// var weather;
// const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=d18c2ca419b1a2b342fcf01acd72c780&units=imperial";
// var weatherRequest = new XMLHttpRequest();
// weatherRequest.open("GET", weatherURL, true);
// weatherRequest.responseType = "json";
// weatherRequest.send();
// weatherRequest.onload = function() {
// var windData = weatherRequest.response.wind;

//     document.getElementById("windSpeed").innerText = " " + windData.speed;

// var mainData = weatherRequest.response.main;

//     document.getElementById("currentTemp").innerText = " " + mainData.temp;
//     document.getElementById("highTemp").innerText = " " + mainData.temp_max;
//     document.getElementById("humidity").innerText = " " + mainData.humidity;
    
// };
// function getWeatherData(weatherData) {

//     for (index in weather) {
//         if (weather[index].name.toUpperCase() === weatherData.toUpperCase()) {
//             return weather[index];
//         }
//     }


// windChill(mainWeatherData.temp, windWeatherData.speed);
//     document.getElementById("humidity").innerText = " " + mainWeatherData.humidity;
//     document.getElementById("windSpeed").innerText = " " + windWeatherData.speed;
// };

// function windChill(tempF, speed) {
//     return parseFloat(35.74 + (.6215 * tempF) - (35.75 * Math.pow(speed, .16)) + ((.4275 * tempF * Math.pow(speed, .16)))).toFixed(2);
// }


let WeatherArray = [];
var weather;
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=d18c2ca419b1a2b342fcf01acd72c780&units=imperial";
var weatherRequest = new XMLHttpRequest();
weatherRequest.open("GET", weatherURL, true);
weatherRequest.responseType= "json";
weatherRequest.send();
weatherRequest.onload = function() {
    let windWeatherData = weatherRequest.response.wind;
    let mainWeatherData = weatherRequest.response.main;
    document.getElementById("currentTemp").innerText = " " + mainWeatherData.temp;
    document.getElementById("highTemp").innerText = " " + mainWeatherData.temp_max;
    document.getElementById("windChill").innerText = " " + windChill(mainWeatherData.temp, windWeatherData.speed);
    document.getElementById("humidity").innerText = " " + mainWeatherData.humidity;
    document.getElementById("windSpeed").innerText = " " + windWeatherData.speed;
};

function windChill(tempF, speed) {
    return parseFloat(35.74 + (.6215 * tempF) - (35.75 * Math.pow(speed, .16)) + ((.4275 * tempF * Math.pow(speed, .16)))).toFixed(2);
}
