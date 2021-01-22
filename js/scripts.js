$(document).ready(function() {
  $(".card").click(function() {
    $(".card.card-front").slideToggle();
    $(".card.card-back").slideToggle();
  });
});