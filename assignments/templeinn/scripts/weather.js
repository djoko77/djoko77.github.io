/* SALT LAKE CITY WEATHER DETAILS */

var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5856194&APPID=b390362458df878917351e9624e4ebb1&units=imperial';
let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURL, true);
weatherRequest.responseType='json';
weatherRequest.send();
weatherRequest.onload = function() {
    var weatherData = weatherRequest.response;

document.getElementById("weather-condition-slc").innerHTML = weatherData.weather[0].description;
document.getElementById("temperature-slc").innerHTML = weatherData.main["temp"] + " &deg;F";
}

/* BOISE WEATHER DETAILS */

var apiURL2 = 'https://api.openweathermap.org/data/2.5/weather?id=5586437&APPID=cde596119966f8d9ef7c9bdd7d6f5204&units=imperial';
let weatherRequest2 = new XMLHttpRequest();
weatherRequest2.open('GET', apiURL2, true);
weatherRequest2.responseType='json';
weatherRequest2.send();
weatherRequest2.onload = function() {
    var weatherData2 = weatherRequest2.response;

    document.getElementById("weather-condition-boise").innerHTML = weatherData2.weather[0].description;
    document.getElementById("temperature-boise").innerHTML = weatherData2.main["temp"] + " &deg;F";
}

/* SAN DIEGO WEATHER DETAILS */

var apiURL3 = 'https://api.openweathermap.org/data/2.5/weather?id=5391811&APPID=775111ca8bb3c5a7907e0d222dd10fa3&units=imperial';
let weatherRequest3 = new XMLHttpRequest();
weatherRequest3.open('GET', apiURL3, true);
weatherRequest3.responseType='json';
weatherRequest3.send();
weatherRequest3.onload = function() {
    var weatherData3 = weatherRequest3.response;

    document.getElementById("weather-condition-sandiego").innerHTML = weatherData3.weather[0].description;
    document.getElementById("temperature-sandiego").innerHTML = weatherData3.main["temp"] + " &deg;F";
}

/* HOUSTON WEATHER DETAILS */

var apiURL4 = 'https://api.openweathermap.org/data/2.5/weather?id=4699066&APPID=44eb0e8f29694caa6bad844b0d626a8c&units=imperial';
let weatherRequest4 = new XMLHttpRequest();
weatherRequest4.open('GET', apiURL4, true);
weatherRequest4.responseType='json';
weatherRequest4.send();
weatherRequest4.onload = function() {
    var weatherData4 = weatherRequest4.response;

    document.getElementById("weather-condition-houston").innerHTML = weatherData4.weather[0].description;
    document.getElementById("temperature-houston").innerHTML = weatherData4.main["temp"] + " &deg;F";
}



