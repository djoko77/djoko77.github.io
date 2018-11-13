var apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=9245458199b42e2a0a9617a7a202fd93&mode=json';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData.main['temp']);
    var currentTemp = weatherData.main['temp'];
    var currentTempInF = (currentTemp*(9/5))-459.67;
    document.getElementById("current-temp").innerHTML = currentTempInF.toFixed(2);
}
