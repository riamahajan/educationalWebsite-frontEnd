$(window).on("click", function (event) {
  // element over which click was made
  var clickOver = $(event.target);
  if (
    $(".navbar .navbar-toggler").attr("aria-expanded") == "true" &&
    clickOver.closest(".navbar").length === 0
  ) {
    // Click on navbar toggler button
    $('button[aria-expanded="true"]').click();
  }
});


$(".navbar-collapse a").click(function () {
  $(".navbar-collapse").collapse("hide");
});

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

// Set the date we're counting down to
var countDownDate = new Date("Jan 7, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  
var x = document.getElementsByClassName("timer");
var i;
for (i = 0; i < x.length; i++) {
  x[i].innerHTML = days + " : " + hours + " : "
  + minutes + " : " + seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementsByClassName("timer").innerHTML = "EXPIRED";
  }
}
}, 1000);


$(".email-signup").hide();
$("#signup-box-link").click(function () {
  $(".email-login").fadeOut(100);
  $(".email-signup").delay(100).fadeIn(100);
  $("#login-box-link").removeClass("active");
  $("#signup-box-link").addClass("active");
});
$("#login-box-link").click(function () {
  $(".email-login").delay(100).fadeIn(100);
  $(".email-signup").fadeOut(100);
  $("#login-box-link").addClass("active");
  $("#signup-box-link").removeClass("active");
});



