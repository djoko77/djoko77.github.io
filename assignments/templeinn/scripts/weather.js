var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5856194&APPID=9245458199b42e2a0a9617a7a202fd93&units=imperial';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);

    var currentWeather = weatherData.weather[0].description;
    document.getElementById("weather-condition-slc").innerHTML = currentWeather;

    console.log(currentWeather);
    var currentTemp = weatherData.main['temp'];
    document.getElementById("temperature-slc").innerHTML = currentTemp + " &deg;F";

    console.log(currentTemp);
}

var apiURL1 = 'https://api.openweathermap.org/data/2.5/weather?id=5586437&APPID=9245458199b42e2a0a9617a7a202fd93&units=imperial';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURL1, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData1 = JSON.parse(weatherRequest.responseText);

    var currentWeather1 = weatherData1.weather[0].description;
    document.getElementById("weather-condition-boise").innerHTML = currentWeather1;

    var currentTemp1 = weatherData1.main['temp'];
    document.getElementById("temperature-boise").innerHTML = currentTemp1 + " &deg;F";

}

var apiURL2 = 'https://api.openweathermap.org/data/2.5/weather?id=5391811&APPID=9245458199b42e2a0a9617a7a202fd93&units=imperial';
var weatherRequest2 = new XMLHttpRequest();
weatherRequest2.open('GET', apiURL2, true);
weatherRequest2.send();

weatherRequest2.onload =  function () {
    let weatherData2 = JSON.parse(weatherRequest2.responseText);

    var currentWeather2 = weatherData2.weather[0].description;
    document.getElementById("weather-condition-sandiego").innerHTML = currentWeather2;

    var currentTemp2 = weatherData2.main['temp'];
    document.getElementById("temperature-sandiego").innerHTML = currentTemp2 + " &deg;F";

}

var apiURL3 = 'https://api.openweathermap.org/data/2.5/weather?id=4699066&APPID=9245458199b42e2a0a9617a7a202fd93&units=imperial';
var weatherRequest3 = new XMLHttpRequest();
weatherRequest3.open('GET', apiURL3, true);
weatherRequest3.send();

weatherRequest.onload =  function () {
    let weatherData3 = JSON.parse(weatherRequest3.responseText);

    var currentWeather3 = weatherData3.weather[0].description;
    document.getElementById("weather-condition-houston").innerHTML = currentWeather3;

    var currentTemp3 = weatherData3.main['temp'];
    document.getElementById("temperature-houston").innerHTML = currentTemp3 + " &deg;F";

}