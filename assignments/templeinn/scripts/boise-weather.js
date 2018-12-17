var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5586437&APPID=cde596119966f8d9ef7c9bdd7d6f5204&mode=json&units=imperial';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();


weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);

    var currentWeather = weatherData.weather[0].description;
    document.getElementById("weather-condition-boise").innerHTML = currentWeather;

    var currentTemp = weatherData.main['temp'];
    document.getElementById("temperature-boise").innerHTML = currentTemp + " &deg;F";

}