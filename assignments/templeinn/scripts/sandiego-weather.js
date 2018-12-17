var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5391811&APPID=775111ca8bb3c5a7907e0d222dd10fa3&mode=json&units=imperial';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);

    var currentWeather = weatherData.weather[0].description;
    document.getElementById("weather-condition-sandiego").innerHTML = currentWeather;

    var currentTemp = weatherData.main['temp'];
    document.getElementById("temperature-sandiego").innerHTML = currentTemp + " &deg;F";

}