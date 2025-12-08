$(window).scroll(function () {
  var scroll_amount = $(window).scrollTop();
  if (scroll_amount > 100) {
    $(".navbar").removeClass("custom_py-5");
    $(".navbar").addClass("custom_py-2");
    $(".fixed_name").removeClass("custom_my-5");
    $(".fixed_name").addClass("custom_my-2");
    $("#backToTop").fadeIn();
  }
  if (scroll_amount == 0) {
    $(".navbar").addClass("custom_py-5");
    $(".navbar").removeClass("custom_py-2");
    $(".fixed_name").addClass("custom_my-5");
    $(".fixed_name").removeClass("custom_my-2");
    $("#backToTop").fadeOut();
  }
});
