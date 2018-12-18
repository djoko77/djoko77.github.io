/* HOMEPAGE WEATHER DETAIL */

var apiURL5 = 'https://api.openweathermap.org/data/2.5/weather?id=5856194&APPID=9245458199b42e2a0a9617a7a202fd93&units=imperial';
let weatherRequest5 = new XMLHttpRequest();
weatherRequest5.open('GET', apiURL5, true);
weatherRequest5.responseType='json';
weatherRequest5.send();
weatherRequest5.onload = function() {
    var weatherData5 = weatherRequest5.response;

document.getElementById("weather-detail").innerHTML = weatherData5.weather[0].description;
}
