/* $(function(){

  $(".accordion").on({
    click: function(){
      $(this).toggle("active");
    }
  }, ".panel")
}) */

$(function() {
  $('.accordian').click(function() {
      $('.panel').slideToggle(500);
  });
}); 