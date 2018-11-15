var slider = document.getElementById("severity-range");
var output = document.getElementById("storm-severity-number");
output.innerHTML = slider.value; 

slider.oninput = function() {
    output.innerHTML = this.value;
}