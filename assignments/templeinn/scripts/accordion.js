$(document).ready(function(){
  $(".set > button").on("click", function(){
    if($(this).hasClass('active')){
      $(this).removeClass("active");
      $(this).siblings('.panel').slideUp(300);
      $(".set > button i").removeClass("fa-minus").addClass("fa-plus");
    }else{
      $(".set > button i").removeClass("fa-minus").addClass("fa-plus");
    $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
    $(".set > button").removeClass("active");
    $(this).addClass("active");
    $('.panel').slideUp(200);
    $(this).siblings('.panel').slideDown(300);
    }

  });
});



