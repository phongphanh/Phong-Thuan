$("document").ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $("#banner").addClass("fix");
      $("#banner").css("background", "#fff");
    } else {
      $("#banner").removeClass("fix");
    }
  })
  $(".btn-scrollTop").click(function() {
    $(window).animate({ scrollTop: 0 }, 1000);
  });
});