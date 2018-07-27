$(document).ready(function() {
  new WOW().init();
  // $(window).scroll(function() {
  //   if ($(this).scrollTop() > 0) {
  //     $("#navigate").addClass("fix");
  //   } else {
  //     $("#navigate").removeClass("fix");
  //   }
  // });
  $('.btn-toggle').click(function() {
    $(".btn-toggle").toggleClass("active");
    $('.main--menu').toggleClass("active-block");
    $('.main--menu li a.active').removeClass("active");
    $('.main--menu li a').click(function() {
      $('.main--menu').removeClass('active-block');
      $(".main--menu").addClass("disable");
    });
  })
  $(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
      $(".button").addClass("btn-active");
    } else {
      $(".button").removeClass("btn-active");
    }
  });
  $("#button").click(function() {
    $('html,body').animate({ scrollTop: 0 }, 800);
  });
  ////
  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
      if ($(this).position().top <= scrollDistance + 80) {
        $('.main--menu li a.active').removeClass('active');
        $('.main--menu li a').eq(i).addClass('active');
      };
    });
  }).scroll();

  //////
  $('.main--menu li a').click(function() {
    $('.main--menu li a.active').removeClass('active');
    $(this).addClass('active');
    var str = $(this).attr('id');
    var id = str.slice(5);
    $("html, body").animate({
      scrollTop: $("#" + id).offset().top
    }, 1000);
  });
  ///

});