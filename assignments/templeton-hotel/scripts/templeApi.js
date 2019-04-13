var houstonTempWeather;
var dallasTempWeather;
var twinFallsTempWeather;
var jordanRiverTempWeather;
var templeData;
window.onload = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "scripts/templesApi.json", true);
    xhttp.responseType = "json";
    xhttp.send();
    xhttp.onload = function () {
        templeData = xhttp.response;
    }


    var weatherRequest = new XMLHttpRequest();
    weatherRequest.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=houston&APPID=d18c2ca419b1a2b342fcf01acd72c780&units=imperial", true);
    weatherRequest.responseType = "json";
    weatherRequest.send();
    weatherRequest.onload = function () {
        houstonTempWeather = weatherRequest.response.main.temp;
        weatherRequest.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=dallas&APPID=d18c2ca419b1a2b342fcf01acd72c780&units=imperial", true);
        weatherRequest.send();
        weatherRequest.onload = function () {
            dallasTempWeather = weatherRequest.response.main.temp;
            weatherRequest.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=5610810&APPID=d18c2ca419b1a2b342fcf01acd72c780&units=imperial", true);
            weatherRequest.send();
            weatherRequest.onload = function () {
                twinFallsTempWeather = weatherRequest.response.main.temp;
                weatherRequest.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=5781770&APPID=d18c2ca419b1a2b342fcf01acd72c780&units=imperial", true);
                weatherRequest.send();
                weatherRequest.onload = function () {
                    jordanRiverTempWeather = weatherRequest.response.main.temp;
                    loadTempleApi();
                }
            }
        }
    }

}
function loadTempleApi() {
    document.getElementById("houstonTempName").innerText = templeData.temples[0].name;
    document.getElementById("houstonTempAddress").innerText = templeData.temples[0].address;
    document.getElementById("houstonTempTel").innerText = templeData.temples[0].telephone;
    document.getElementById("houstonTempServices").innerText = templeData.temples[0].services;
    document.getElementById("houstonTempHistory").innerText = templeData.temples[0].history;
    document.getElementById("houstonTempSched").innerText = templeData.temples[0].ordinanceSchedule;
    document.getElementById("houstonClosureDates").innerText = templeData.temples[0].templeClosure;

    document.getElementById("dallasTempName").innerText = templeData.temples[1].name;
    document.getElementById("dallasTempAddress").innerText = templeData.temples[1].address;
    document.getElementById("dallasTempTel").innerText = templeData.temples[1].telephone;
    document.getElementById("dallasTempServices").innerText = templeData.temples[1].services;
    document.getElementById("dallasTempHistory").innerText = templeData.temples[1].history;
    document.getElementById("dallasTempSched").innerText = templeData.temples[1].ordinanceSchedule;
    document.getElementById("dallasClosureDates").innerText = templeData.temples[1].templeClosure;

    document.getElementById("twinFallsTempName").innerText = templeData.temples[2].name;
    document.getElementById("twinFallsTempAddress").innerText = templeData.temples[2].address;
    document.getElementById("twinFallsTempTel").innerText = templeData.temples[2].telephone;
    document.getElementById("twinFallsTempServices").innerText = templeData.temples[2].services;
    document.getElementById("twinFallsTempHistory").innerText = templeData.temples[2].history;
    document.getElementById("twinFallsTempSched").innerText = templeData.temples[2].ordinanceSchedule;
    document.getElementById("twinFallsClosureDates").innerText = templeData.temples[2].templeClosure;

    document.getElementById("jordanRiverTempName").innerText = templeData.temples[3].name;
    document.getElementById("jordanRiverTempAddress").innerText = templeData.temples[3].address;
    document.getElementById("jordanRiverTempTel").innerText = templeData.temples[3].telephone;
    document.getElementById("jordanRiverTempServices").innerText = templeData.temples[3].services;
    document.getElementById("jordanRiverTempHistory").innerText = templeData.temples[3].history;
    document.getElementById("jordanRiverTempSched").innerText = templeData.temples[3].ordinanceSchedule;
    document.getElementById("jordanRiverClosureDates").innerText = templeData.temples[3].templeClosure;

        document.getElementById("houstonTempWeather").innerText = houstonTempWeather;
        document.getElementById("dallasTempWeather").innerText = dallasTempWeather;
        document.getElementById("twinFallsTempWeather").innerText = twinFallsTempWeather;
        document.getElementById("jordanRiverTempWeather").innerText = jordanRiverTempWeather;
    }
