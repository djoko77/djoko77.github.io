var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=9245458199b42e2a0a9617a7a202fd93&mode=json&units=imperial';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
console.log(weatherData.rain);

    var currentWeather = weatherData.weather[0].main;
    document.getElementById("current-weather").innerHTML = currentWeather;


    var currentTemp = weatherData.main['temp'];
    document.getElementById("current-temperature").innerHTML = currentTemp;

    var currentHumidity = weatherData.main['humidity'];
    document.getElementById("current-humidity").innerHTML = currentHumidity+"%";

    var currentPrecipitation = weatherData.rain;
    if (currentPrecipitation == undefined ) {
        currentPrecipitation = "0 inches";
    }
    else {
        return currentPrecipitation+ " inches"
    }

    document.getElementById("current-precipitation").innerHTML = currentPrecipitation;

    var currentWindSpeed = weatherData.wind['speed'];
    document.getElementById("wind-speed").innerHTML = currentWindSpeed+" mph";

    var currentWeatherIcon = weatherData.weather[0].icon;
    document.getElementById("weather-icon")
    .setAttribute( 'src', "http://openweathermap.org/img/w/"+currentWeatherIcon+".png")

    var currentWeather = weatherData.weather[0].description;
    document.getElementById("current-condition-label").innerHTML = currentWeather;

}

var apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=9245458199b42e2a0a9617a7a202fd93&mode=json&units=imperial';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherForecast = JSON.parse(weatherRequest.responseText);
console.log(weatherData.rain);


