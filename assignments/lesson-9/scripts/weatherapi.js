var apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=9245458199b42e2a0a9617a7a202fd93&mode=json&units=metric';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData[0]);

    document.getElementById("current-temp").innerHTML = weatherData;
}