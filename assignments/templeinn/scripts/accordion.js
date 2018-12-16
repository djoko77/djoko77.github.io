/* $(function(){

  $(".accordion").on({
    click: function(){
      $(this).toggle("active");
    }
  }, ".panel")
}) */

$(function() {
  $(".accordion").click(function() {
      $(".panel").slideToggle(300);
  });
}); 
