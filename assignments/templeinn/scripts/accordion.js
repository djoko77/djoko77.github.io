/* $(function(){

  $(".accordion").on({
    click: function(){
      $(this).toggle("active");
    }
  }, ".panel")
}) */

  $('.accordian').click(function() {
      $('.panel').slideToggle(500);
  });
