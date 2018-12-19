var startNumber = 0;
sliderCarousel();

function sliderCarousel() {
    var i;
    var s = document.getElementsByClassName("slider");
    for (i = 0; i < x.length; i++) {
       s[i].style.display = "none";  
    }
    startNumber++;
    if (tartNumber > s.length) {startNumber = 1}    
    s[startNumber-1].style.display = "block";  
    setTimeout(sliderCarousel, 3000);
}