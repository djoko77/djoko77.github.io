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

(function($) {
    
  var allPanels = $('.panel').hide();
    
  $('.accordion').click(function() {
    allPanels.slideUp();
    $(this).parent().next().slideDown();
    return false;
  });

})

