/* SALT LAKE TEMPLE CLOSURE DATE */

var closureDate = document.querySelector('#close-saltlake');
var requestURL = 'https://djoko77.github.io/assignments/templeinn/scripts/temple.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var closing = request.response;
    showClosure(closing);
    }

    function showClosure(jsonObj) {
        var renovation = jsonObj['temples'];
        var renovationDates = document.createElement('ul');
        
        var listDates = renovation[0].nextYear;

        for (var j = 0; j < listDates.length; j++) {
            var listClosureDates = document.createElement('li');
            listClosureDates.textContent = listDates[j];
            renovationDates.appendChild(listClosureDates);

            closureDate.appendChild(renovationDates);
          }
}

/* BOISE TEMPLE CLOSURE DATE */

var closureDate2 = document.querySelector('#close-boise');
var requestURL2 = 'https://djoko77.github.io/assignments/templeinn/scripts/temple.json';
var request2 = new XMLHttpRequest();
request2.open('GET', requestURL2);
request2.responseType = 'json';
request2.send();

request2.onload = function() {
    var closing2 = request2.response;
    showClosure2(closing2);
    }

    function showClosure2(jsonObj2) {
        var renovation2 = jsonObj2['temples'];
        var renovationDates2 = document.createElement('ul');
        
        var listDates2 = renovation2[1].nextYear;

        for (var j = 0; j < listDates2.length; j++) {
            var listClosureDates2 = document.createElement('li');
            listClosureDates2.textContent = listDates2[j];
            renovationDates2.appendChild(listClosureDates2);

            closureDate2.appendChild(renovationDates2);
          }
}

/* SAN DIEGO TEMPLE CLOSURE DATE */

var closureDate3 = document.querySelector('#close-sandiego');
var requestURL3 = 'https://djoko77.github.io/assignments/templeinn/scripts/temple.json';
var request3 = new XMLHttpRequest();
request3.open('GET', requestURL3);
request3.responseType = 'json';
request3.send();

request3.onload = function() {
    var closing3 = request3.response;
    showClosure3(closing3);
    }

    function showClosure3(jsonObj3) {
        var renovation3 = jsonObj3['temples'];
        var renovationDates3 = document.createElement('ul');
        
        var listDates3 = renovation3[1].nextYear;

        for (var j = 0; j < listDates3.length; j++) {
            var listClosureDates3 = document.createElement('li');
            listClosureDates3.textContent = listDates3[j];
            renovationDates3.appendChild(listClosureDates3);

            closureDate3.appendChild(renovationDates3);
          }
}

/* HOUSTON TEMPLE CLOSURE DATE */

var closureDate4 = document.querySelector('#close-houston');
var requestURL4 = 'https://djoko77.github.io/assignments/templeinn/scripts/temple.json';
var request4 = new XMLHttpRequest();
request4.open('GET', requestURL4);
request4.responseType = 'json';
request4.send();

request4.onload = function() {
    var closing4 = request4.response;
    showClosure4(closing4);
    }

    function showClosure4(jsonObj4) {
        var renovation4 = jsonObj4['temples'];
        var renovationDates4 = document.createElement('ul');
        
        var listDates4 = renovation4[1].nextYear;

        for (var j = 0; j < listDates4.length; j++) {
            var listClosureDates4 = document.createElement('li');
            listClosureDates4.textContent = listDates4[j];
            renovationDates4.appendChild(listClosureDates4);

            closureDate4.appendChild(renovationDates4);
          }
}