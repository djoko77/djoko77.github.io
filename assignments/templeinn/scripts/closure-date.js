var closureForTemple = document.getElementsByClassName('closure');
var templeDataURL = 'https://djoko77.github.io/assignments/templeinn/scripts/temple.json';
var request = new XMLHttpRequest();
request.open('GET', templeDataURL);
request.responseType = 'json';
request.send();

request.onload =  function () {
    var templeFullData = request.response;
    showData(templeFullData);
}

function showData(jsonObj) {
var templeData = jsonObj['temples'];

console.log(templeData);




var numbering = 0;
  for (var i = 0; i < templeData.length; i++) {
    if (i == 1 || i == 2 || i == 3) {

    var thisYear = document.createElement('p');
    var nextYear = document.createElement('p');
    
    thisYear.textContent = townData[i].2018;
    nextYear.textContent = townData[i].2019;

    closureForTemple[numbering].appendChild(thisYear);
    closureForTemple[numbering].appendChild(nextYear);

    numbering++;
    }
}
}
