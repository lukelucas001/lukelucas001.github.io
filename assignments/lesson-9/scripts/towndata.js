
    // Variable to use later to store the json data into
    var townJsonData;

    // URL where the json data is being stored
    const URL = "https://lukelucas001.github.io/assignments/lesson-9/scripts/data.json";

    // Create a XMLhttpRequest(web request) object
    var webRequest = new XMLHttpRequest();

    // Setup the specification of the web request
    webRequest.open("GET", URL, true);

    // Define what type of data you want to get from the request
    webRequest.responseType = "json";

    // Now make the actual request (send it off)
    webRequest.send();

    // Request has finished
    webRequest.onload = function () {
        // ".response" is part of the webRequest object
        // by default whatever was returned from the url
        // is set inside the response.
        // webRequest is is your object and .response is the key value
        // note: you dont have to use JSON.parse() function because in your
        // web request you specifically said you want JSON data back and so
        // by default the web request will already format it for you. if you
        // only requested for text back than you would have to format it into
        // json.

        // set the towns array equal to the townJsonData variable
        townJsonData = webRequest.response.towns;

        // Now that your townJsonData has all the json data you can successfully use it to input
        // data into your html.

        // get the Preston town object from the list of towns by calling the getTownByName //function.
        var prestonTownData = getTownByName("preston");
        document.getElementById("prestonMotto").innerText = " " + prestonTownData.motto;
        document.getElementById("prestonYearFound").innerText = " " + prestonTownData.yearFounded;
        document.getElementById("prestonPopulation").innerText = " " + prestonTownData.currentPopulation;
        document.getElementById("prestonRainFall").innerText = " " + prestonTownData.averageRainfall;
        var sodaSpringsTownData = getTownByName("soda Springs");
        document.getElementById("sodaSpringsMotto").innerText = " " + sodaSpringsTownData.motto;
        document.getElementById("sodaSpringsYearFound").innerText = " " + sodaSpringsTownData.yearFounded;
        document.getElementById("sodaSpringsPopulation").innerText = " " + sodaSpringsTownData.currentPopulation;
        document.getElementById("sodaSpringsRainFall").innerText = " " + sodaSpringsTownData.averageRainfall;
        var fishHavenTownData = getTownByName("fish Haven");
        document.getElementById("fishHavenMotto").innerText = " " + fishHavenTownData.motto;
        document.getElementById("fishHavenYearFound").innerText = " " + fishHavenTownData.yearFounded;
        document.getElementById("fishHavenPopulation").innerText = " " + fishHavenTownData.currentPopulation;
        document.getElementById("fishHavenRainFall").innerText = " " + fishHavenTownData.averageRainfall;
    };

    // this is a generic function that will return the data specific to the town name that is
    // passed in as a parameter.
    function getTownByName(townName) {

// this for loop will search the array to find the key value that is equal to the parameter passed in.
        for (index in townJsonData) {
            if (townJsonData[index].name.toUpperCase() === townName.toUpperCase()) {
                return townJsonData[index];
            }
        }
// else no town matches the name in the paramter
    }