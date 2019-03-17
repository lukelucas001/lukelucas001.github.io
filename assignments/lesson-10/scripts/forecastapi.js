let forecastArray = [];
var forecast;
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=d18c2ca419b1a2b342fcf01acd72c780&units=imperial";
var webRequest = new XMLHttpRequest();
webRequest.open("GET", forecastURL, true);
webRequest.responseType = "json";
webRequest.send();
webRequest.onload = function() {
      forecast = webRequest.response.list;

      for (let i = 0; i < forecast.length; i++) {
            let correctTime = forecast[i].dt_txt.includes("18:00:00");

            if (correctTime) {
                  forecastArray.push(forecast[i]);
            }
      }
      populateForecastTable();
}


function populateForecastTable() {
      document.getElementById("dayOne").innerText = getWeatherDate(forecastArray[0].dt_txt);
      document.getElementById("dayOneIcon").src = findWeatherType(forecastArray[0].weather[0].description);
      document.getElementById("dayOneTemp").innerText = forecastArray[0].main.temp;

      document.getElementById("dayTwo").innerText = getWeatherDate(forecastArray[1].dt_txt);
      document.getElementById("dayTwoIcon").src = findWeatherType(forecastArray[1].weather[0].description);
      document.getElementById("dayTwoTemp").innerText = forecastArray[1].main.temp;

      document.getElementById("dayThree").innerText = getWeatherDate(forecastArray[2].dt_txt);
      document.getElementById("dayThreeIcon").src = findWeatherType(forecastArray[2].weather[0].description);
      document.getElementById("dayThreeTemp").innerText = forecastArray[2].main.temp;

      document.getElementById("dayFour").innerText = getWeatherDate(forecastArray[3].dt_txt);
      document.getElementById("dayFourIcon").src = findWeatherType(forecastArray[3].weather[0].description);
      document.getElementById("dayFourTemp").innerText = forecastArray[3].main.temp;

      document.getElementById("dayFive").innerText = getWeatherDate(forecastArray[4].dt_txt);
      document.getElementById("dayFiveIcon").src = findWeatherType(forecastArray[4].weather[0].description);
      document.getElementById("dayFiveTemp").innerText = forecastArray[4].main.temp;
}


function findWeatherType(weatherCondition) {

      if (weatherCondition === "clear sky") {
            return "https://openweathermap.org/img/w/01d.png";
      }
      else if (weatherCondition === "few clouds") {
            return "https://openweathermap.org/img/w/02d.png";
      }
      else if (weatherCondition === "scattered clouds") {
            return "https://openweathermap.org/img/w/03d.png";
      }
      else if (weatherCondition === "broken clouds") {
            return "https://openweathermap.org/img/w/04d.png";
      }
      else if (weatherCondition === "shower rain") {
            return "https://openweathermap.org/img/w/09d.png";
      }
      else if (weatherCondition === "rain") {
            return "https://openweathermap.org/img/w/10d.png";
      }
      else if (weatherCondition === "thunderstorm") {
            return "https://openweathermap.org/img/w/11d.png";
      }
      else if (weatherCondition === "snow") {
            return "https://openweathermap.org/img/w/13d.png";
      }
      else if (weatherCondition === "mist") {
            return "https://openweathermap.org/img/w/50d.png";
      }
      else {
            return "";
      }
}

function getWeatherDate(timeStamp) {
      let date = new Date(timeStamp);
      let day = date.getDay();
      return getDayOfWeek(day);
}

function getDayOfWeek(dayOfWeekNum) {
      if (dayOfWeekNum === 0) {
            return "Sun";
      }
      else if (dayOfWeekNum === 1) {
            return "Mon";
      }
      else if (dayOfWeekNum === 2) {
            return "Tues";
      }
      else if (dayOfWeekNum === 3) {
            return "Wed";
      }
      else if (dayOfWeekNum === 4) {
            return "Thrs";
      }
      else if (dayOfWeekNum === 5) {
            return "Fri";
      }
      else if (dayOfWeekNum === 6) {
            return "Sat";
      }
      else {
            return "noDate";
      }
}
