var t = document.getElementById('current-temperature');
var text = t.textContent;
var numberT = Number(text);

var s = document.getElementById('wind-speed');
var text2 = s.textContent;
var numberS = Number(text2);
var ws = Math.pow(numberS, 0.16);

var chill = 35.74 + 0.6215*numberT- 35.75 * ws + 0.4275*numberT*ws;
console.log(chill);

document.getElementById('wind-chill').innerHTML = chill.toFixed(2) + " &deg;F";
