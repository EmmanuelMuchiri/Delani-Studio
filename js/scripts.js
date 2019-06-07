$(document).ready(function() {
  $(".hide p").hide();
  $("#design").click(function() {
    $("#design p").toggle();
    $("#design img").toggle();
  });
  $("#dev").click(function() {
    $("#dev p").toggle();
    $("#dev img").toggle();
  });
  $("#products").click(function() {
    $("#products p").toggle();
    $("#products img").toggle();
  });
});
