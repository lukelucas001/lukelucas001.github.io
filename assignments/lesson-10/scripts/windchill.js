function doInputOutput() {
    var temp = document.getElementById("currentTemp").value;
    var wind= document.getElementById("windSpeed").value;
    var chill = windChill(currentTemp, windSpeed);
    document.getElementById("output").innerHTML = chill;
}

// //Set values for windChill calculation
// var temp = document.getElementById("currentTemp").value;
// var wind = document.getElementById("windSpeed").value;


// //Formal call of the windChill calculation
// var chill = windChill(temp, wind);


// //Placing the answer of the calculation into the "output" paragraph
// document.getElementById("output").innerHTML = chill;





function windChill(tempF, speed) {
    return parseFloat
    (35.74 + (.6215 * tempF) - (35.75 * Math.pow(speed, .16)) + ((.4275 * tempF * Math.pow(speed, .16))));
}

