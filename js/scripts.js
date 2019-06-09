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
  $('#textOne').hide();
  $('#imageOne').animate({
    opacity: 1

  });

  $('#imageOne').hover(function() {
    $(this).stop().animate({
      opacity: .4
    }, 200);
    $('#textOne').fadeIn();

  }, function() {
    $(this).stop().animate({
      opacity: 1
    }, 500)
    $('#textOne').fadeOut();
  });

  $('#textTwo').hide();
  $('#imageTwo').animate({
    opacity: 1

  });

  $('#imageTwo').hover(function() {
    $(this).stop().animate({
      opacity: .4
    }, 200);
    $('#textTwo').fadeIn();

  }, function() {
    $(this).stop().animate({
      opacity: 1
    }, 500)
    $('#textTwo').fadeOut();
  });
  $('#textThree').hide();
  $('#imageThree').animate({
    opacity: 1

  });

  $('#imageThree').hover(function() {
    $(this).stop().animate({
      opacity: .4
    }, 200);
    $('#textThree').fadeIn();

  }, function() {
    $(this).stop().animate({
      opacity: 1
    }, 500)
    $('#textThree').fadeOut();
  });
  
});

var submitItems = function(name, email, message) {

  var userName = document.getElementById('name').value
  var userEmail = document.getElementById('email').value
  var userMessage = document.getElementById('message').value
  var items = [userName, userEmail, userEmail];

  if (!items[0] || !items[1] || !items[2]) {
    alert("Cannot insert empty fields please type again");
  } else {
    alert("Dear :" + items[0] + " Of Email Address : " + items[1] + " Thank you for contacting us");
  }
  return false;
}
