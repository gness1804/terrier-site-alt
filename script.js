$(document).ready(function () { // to handle the dropdown menus
  $("footer").hover(function () {
    $(this).toggleClass("footer-is-different");
  });
  $(".headline").mouseenter(function () {
    $(this).toggleClass("headline-changed");
  });
  $(".dropdown_menu").hide();
  $(".dropdown_container").hover(function () {
    $(".dropdown_menu").slideDown();
  }, function () {
    setTimeout(function () {$(".dropdown_menu").slideUp();}, 8000);
  })
});

function testWinIndex() { //redirect to mobile site; for smartphones and tablets
  var w = window.outerWidth;
  if (w < 800) {
    window.location.replace("index-mob.html");
  }
};
