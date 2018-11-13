var apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=93d4de78c364e70e3e6dad8290e93e03';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
}

function showTemperature(jsonObj) {     
    var currentTemperature = jsonObj["temp"];
    document.getElementById("current-temp").innerHTML = currentTemperature;
}