var windchillURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=9245458199b42e2a0a9617a7a202fd93&mode=json&units=imperial';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURL);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function () {
	var weatherData = weatherRequest.response;
	windChill(weatherData); 
}

function windChill(jsonObj) {
	var t = jsonObj.main.temp;
	var ws = jsonObj.wind.speed;
    console.log(t);
    console.log(ws);
var ws1 = Math.pow(ws, 0.16);

var chill = 35.74 + 0.6215*t- 35.75 * ws1 + 0.4275*t*ws1;
console.log(chill);

document.getElementById('wind-chill').innerHTML = chill.toFixed(2) + " &deg;F";
}