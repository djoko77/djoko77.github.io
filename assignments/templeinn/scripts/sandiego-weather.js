var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&APPID=9245458199b42e2a0a9617a7a202fd93&mode=json&units=imperial';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();


weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);

    var currentWeather = weatherData.weather[0].main;
    document.getElementById("current-weather").innerHTML = currentWeather;

    var currentTemp = weatherData.main['temp'];
    document.getElementById("current-temperature").innerHTML = currentTemp + " &deg;F";

    var currentHumidity = weatherData.main['humidity'];
    document.getElementById("current-humidity").innerHTML = currentHumidity+"%";

    var clouds = weatherData.clouds['all'];
    document.getElementById("cloudiness").innerHTML = clouds+"%";

    var currentWindSpeed = weatherData.wind['speed'];
    document.getElementById("wind-speed").innerHTML = currentWindSpeed+" mph";

    var ws = Math.pow(currentWindSpeed, 0.16);
    var chill = 35.74 + 0.6215*currentTemp - 35.75 * ws + 0.4275*currentTemp*ws;
    console.log(chill);
    document.getElementById("wind-chill").innerHTML = chill.toFixed(2) + " &deg;F";

    var currentWeatherIcon = weatherData.weather[0].icon;
    document.getElementById("weather-icon")
    .setAttribute( 'src', "http://openweathermap.org/img/w/"+currentWeatherIcon+".png")

    var currentWeather = weatherData.weather[0].description;
    document.getElementById("current-condition-label").innerHTML = currentWeather;

}