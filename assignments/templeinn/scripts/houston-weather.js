var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=4699066&APPID=44eb0e8f29694caa6bad844b0d626a8c&mode=json&units=imperial';
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