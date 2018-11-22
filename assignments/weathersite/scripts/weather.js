var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=9245458199b42e2a0a9617a7a202fd93&mode=json&units=imperial';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);

    var currentWeather = weatherData.weather[0].main;
    document.getElementById("current-weather").innerHTML = currentWeather;

    var currentTemp = weatherData.main['temp'];
    document.getElementById("current-temperature").innerHTML = currentTemp;

    var currentHumidity = weatherData.main['humidity'];
    document.getElementById("current-humidity").innerHTML = currentHumidity+"%";

    var clouds = weatherData.clouds['all'];
    document.getElementById("cloudiness").innerHTML = clouds+"%";

    var currentWindSpeed = weatherData.wind['speed'];
    document.getElementById("wind-speed").innerHTML = currentWindSpeed;

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
console.log(weatherForecast.list[0].dt_txt);

/* DAY ONE */
var HTday1 = weatherForecast.list[0].main["temp_max"];
document.getElementById("HT1").innerHTML = HTday1+" &deg;F";

var HTdayName0 = weatherForecast.list[0].dt_txt;
var dateForecast0 = new Date(HTdayName0);
var d = new Array(7);
    d[0] = "Sunday";
    d[1] = "Monday";
    d[2] = "Tuesday";
    d[3] = "Wednesday";
    d[4] = "Thursday";
    d[5] = "Friday";
    d[6] = "Saturday";
var d0 = d[dateForecast0.getDay()];
document.getElementById("dailyForecast0").innerHTML = d0;

/* DAY TWO */
var HTday2 = weatherForecast.list[6].main["temp_max"];
document.getElementById("HT2").innerHTML = HTday2+" &deg;F";

var HTdayName1 = weatherForecast.list[6].dt_txt;
var dateForecast1 = new Date(HTdayName1);
var d1 = d[dateForecast1.getDay()];
document.getElementById("dailyForecast1").innerHTML = d1;

/* DAY THREE */
var HTday3 = weatherForecast.list[14].main["temp_max"];
document.getElementById("HT3").innerHTML = HTday3+" &deg;F";

var HTdayName2 = weatherForecast.list[14].dt_txt;
var dateForecast2 = new Date(HTdayName2);
var d2 = d[dateForecast2.getDay()];
document.getElementById("dailyForecast2").innerHTML = d2;

/* DAY FOUR */
var HTday4 = weatherForecast.list[22].main["temp_max"];
document.getElementById("HT4").innerHTML = HTday4+" &deg;F";

var HTdayName3 = weatherForecast.list[22].dt_txt;
var dateForecast3 = new Date(HTdayName3);
var d3 = d[dateForecast3.getDay()];
document.getElementById("dailyForecast3").innerHTML = d3;

/* DAY FIVE */
var HTday5 = weatherForecast.list[30].main["temp_max"];
document.getElementById("HT5").innerHTML = HTday5+" &deg;F";

var HTdayName4 = weatherForecast.list[30].dt_txt;
var dateForecast4 = new Date(HTdayName4);
var d4 = d[dateForecast4.getDay()];
document.getElementById("dailyForecast4").innerHTML = d4;

}

