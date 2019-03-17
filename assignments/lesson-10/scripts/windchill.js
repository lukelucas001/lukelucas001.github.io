function doInputOutput() {
    var temp = document.getElementById("temp").value;
    var wind = document.getElementById("wind").value;
    var chill = windChill(temp, wind);
    document.getElementById("output").innerHTML = chill;
}
function windChill(tempF, speed) {
    return parseFloat
    (35.74 + (.6215 * tempF) - (35.75 * Math.pow(speed, .16)) + ((.4275 * tempF * Math.pow(speed, .16))));
}