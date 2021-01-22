$(document).ready(function() {
  $(".card").click(function() {
    $(".card.card-front").fadeToggle();
    $(".card.card-back").fadeToggle();
  });
});