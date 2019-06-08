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
  var items = [userName, userEmail, userEmail];

  if (!items[0] || !items[1] || !items[2]) {
    alert("Cannot insert empty fields please type again");
  } else {
    alert("Dear :" + items[0] + " Of Email Address : " + items[1] + " Your message has been submitted");
  }
  return false;
}
