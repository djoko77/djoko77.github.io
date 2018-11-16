var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=9245458199b42e2a0a9617a7a202fd93&mode=json&units=imperial';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
console.log(weatherData.rain);

    var currentWeather = weatherData.weather[0].main;
    document.getElementById("current-weather").innerHTML = currentWeather;


    var currentTemp = weatherData.main['temp'];
    document.getElementById("current-temperature").innerHTML = currentTemp;

    var currentHumidity = weatherData.main['humidity'];
    document.getElementById("current-humidity").innerHTML = currentHumidity+"%";

    var currentPrecipitation = weatherData.rain;
    if (currentPrecipitation == undefined ) {
        currentPrecipitation = "0 inches";
    }
    else {
        return currentPrecipitation+ " inches"
    }

    document.getElementById("current-precipitation").innerHTML = currentPrecipitation;

    var currentWindSpeed = weatherData.wind['speed'];
    document.getElementById("wind-speed").innerHTML = currentWindSpeed+" mph";

    var currentWeatherIcon = weatherData.weather[0].icon;
    document.getElementById("weather-icon")
    .setAttribute( 'src', "http://openweathermap.org/img/w/"+currentWeatherIcon+".png")

    var currentWeather = weatherData.weather[0].description;
    document.getElementById("current-condition-label").innerHTML = currentWeather;

}

var apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=9245458199b42e2a0a9617a7a202fd93&mode=json&units=imperial';
var weatherRequest2 = new XMLHttpRequest();
weatherRequest2.open('GET', apiURL2, true);
weatherRequest2.send();

weatherRequest2.onload =  function () {
    let weatherForecast = JSON.parse(weatherRequest2.responseText);
console.log(weatherForecast.list[0].main["temp_max"]);

var HTday1 = weatherForecast.list[0].main["temp_max"];
document.getElementById("HT1").innerHTML = HTday1+" &deg;F";

var HTday2 = weatherForecast.list[1].main["temp_max"];
document.getElementById("HT2").innerHTML = HTday2+" &deg;F";

var HTday3 = weatherForecast.list[2].main["temp_max"];
document.getElementById("HT3").innerHTML = HTday3+" &deg;F";

var HTday4 = weatherForecast.list[3].main["temp_max"];
document.getElementById("HT4").innerHTML = HTday4+" &deg;F";

var HTday5 = weatherForecast.list[4].main["temp_max"];
document.getElementById("HT5").innerHTML = HTday5+" &deg;F";
}

