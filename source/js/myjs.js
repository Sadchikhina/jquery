$(document).ready(function(){
  $(".box__btn").click(function(){
    $(".box__text").fadeToggle();
    $(".box").slideToggle("slow");

  });
});
