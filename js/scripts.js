$(document).ready(function() {
  $(".hide p").hide();
  $(".hide").click(function() {
    $("#design p").fadeToggle();
    $("#design img").fadeToggle();
  });
});
