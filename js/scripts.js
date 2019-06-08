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

var submitItems = function(name, email, message) {

  var userName = document.getElementById('name').value
  var userEmail = document.getElementById('email').value
  var userMessage = document.getElementById('message').value
  var inputValues = null;
  // var items = [userName, userEmail, userEmail];

  if (!userName || !userEmail || !userMessage) {
    alert("Cannot insert empty fields please type again");
  } else {
    alert("Your Inputs have been submitted successfully");
  }
  return false;
}
