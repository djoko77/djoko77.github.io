/* $(function(){

  $(".accordion").on({
    click: function(){
      $(this).toggle("active");
    }
  }, ".panel")
})

  $('.accordian').click(function() {
      $('.panel').slideToggle(500);
  });

  var acc = document.getElementsByClassName("accordion");
var i;

$(function() {
  $(".accordian").click(function() {
  $('.panel').slideToggle(500);
});
})
*/
var acc = $("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].click(function() {
$(this).toggle("active");

var panel = $(this).next();
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 
