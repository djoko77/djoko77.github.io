var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5856194&APPID=b390362458df878917351e9624e4ebb1&mode=json&units=imperial';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);

    var currentWeather = weatherData.weather[0].description;
    document.getElementById("weather-condition-slc").innerHTML = currentWeather;

    var currentTemp = weatherData.main['temp'];
    document.getElementById("temperature-slc").innerHTML = currentTemp + " &deg;F";

}