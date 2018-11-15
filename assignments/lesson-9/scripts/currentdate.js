var today = new Date();

var d = new Array(7);
    d[0] = "Sunday";
    d[1] = "Monday";
    d[2] = "Tuesday";
    d[3] = "Wednesday";
    d[4] = "Thursday";
    d[5] = "Friday";
    d[6] = "Saturday";
var d = d[today.getDay()];

var numberDay = today.getDate();

var m = new Array(12);
    m[0] = "January";
    m[1] = "February";
    m[2] = "March";
    m[3] = "April";
    m[4] = "May";
    m[5] = "June";
    m[6] = "July";
    m[7] = "August";
    m[8] = "September";
    m[9] = "October";
    m[10] = "November";
    m[11] = "December";
var m = m[today.getMonth()];

var y = today.getFullYear();

today = d + ", " + numberDay + " " + m + " " + y;
document.getElementById("current-date").innerHTML = today;