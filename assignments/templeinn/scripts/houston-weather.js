var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=4699066&APPID=9245458199b42e2a0a9617a7a202fd93&mode=json&units=imperial';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);

    var currentWeather = weatherData.weather[0].description;
    document.getElementById("weather-condition-houston").innerHTML = currentWeather;

    var currentTemp = weatherData.main['temp'];
    document.getElementById("temperature-houston").innerHTML = currentTemp + " &deg;F";

}