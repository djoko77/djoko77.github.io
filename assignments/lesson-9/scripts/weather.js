var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=9245458199b42e2a0a9617a7a202fd93&mode=json&units=imperial';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData.weather["description"]);

    var currentWeather = weatherData.weather.main;
    document.getElementById("current-weather").innerHTML = currentWeather;

    var currentTemp = weatherData.main['temp'];
    document.getElementById("current-temperature").innerHTML = currentTemp+" &deg;F";

    var currentHumidity = weatherData.main['humidity'];
    document.getElementById("current-humidity").innerHTML = currentHumidity+"%";

    var currentPrecipitation = weatherData.main['precipitation'];
    document.getElementById("current-precipitation").innerHTML = currentPrecipitation;

    var currentWindSpeed = weatherData.wind['speed'];
    document.getElementById("wind-speed").innerHTML = currentWindSpeed+" mph";
}