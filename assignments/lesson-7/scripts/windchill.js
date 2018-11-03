var t = 76;
var s = 5;
var ws = Math.pow(s, 0.16);
var chill = 35.74 + 0.6215*t - 35.75 * s + 0.4275*t*s;
document.getElementById("wind-chill").innerHTML = chill.toFixed(2) + " &deg;F";