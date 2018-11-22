var dataForTowns = document.getElementsByClassName('town-data');
var townDataURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', townDataURL);
request.responseType = 'json';
request.send();

request.onload =  function () {
    var townFullData = request.response;
    showData(townFullData);
}

function showData(jsonObj) {
var townData = jsonObj['towns'];

var numbering = 0;
  for (var i = 0; i < townData.length; i++) {
    if (i == 4 || i == 1 || i == 5) {
    var myTownData = document.createElement('div');
    var myTown = document.createElement('h2');
    var townMotto = document.createElement('div');
    var townFounded = document.createElement('p');
    var townPopulation = document.createElement('p');
    var rainfall = document.createElement('p');

    myTown.textContent = townData[i].name;
    townMotto.textContent = townData[i].motto;
    townFounded.textContent = "Year Founded: "+townData[i].yearFounded;
    townPopulation.textContent = "Population: "+townData[i].currentPopulation;
    rainfall.textContent = "Annual Rainfall: "+townData[i].averageRainfall+" inches";

    dataForTowns[numbering].appendChild(myTown);
    dataForTowns[numbering].appendChild(townMotto);
    dataForTowns[numbering].appendChild(townFounded);
    dataForTowns[numbering].appendChild(townPopulation);
    dataForTowns[numbering].appendChild(rainfall);
    numbering++;
    }
}
}
