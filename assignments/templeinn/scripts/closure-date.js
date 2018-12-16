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

for (var i = 0; i < templeData.length; i++) {
    if ( i == 1) {

        var thisYear1 = templeData[i].thisYear;
        console.log(thisYear1);
        var nextYear1 = templeData[i].nextYear;
        console.log(nextYear1);

        var closure = "2018: "+thisYear1 +"2019: "+nextYear1
        document.getElementById("closure-saltlake").innerHTML = closure;
    
    }
}
    
}