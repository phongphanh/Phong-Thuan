$(document).ready(function() {
  new WOW().init();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".btn--scrollTop").addClass("active");
      $(".cart__right").addClass("active1");
    } else {
      $(".btn--scrollTop").removeClass("active");
      $(".cart__right").removeClass("active1");
    }
  });
  $(".searchform__content").click(function() {
    $(".search__input").toggleClass("active");
    $("#wrapper").toggleClass("active");
  });
  $(".close__search a i").click(function() {
    $(".search__input").removeClass("active");
    $("#wrapper").removeClass("active");
  });
  $(".btn--scrollTop").click(function() {
    $('html,body').animate({ scrollTop: 0 }, 800);
  });
  // 
  var index = 0;
  var i = 0;
  var slide = document.querySelectorAll('.slide');
  $('.button__next').click(function() {
    if (index + 1 > 3) {
      i = 0;
    } else {
      i = index + 1;
    }

    $('.slide.active').removeClass('active');
    slide[i].className += ' active';
    index = i;
  });
  $('.button__pre').click(function() {
    if (index - 1 < 0) {
      i = 3;
    } else {
      i = index - 1;
    }
    $('.slide.active').removeClass('active');
    slide[i].className += ' active';
    index = i;
  });
  // 
  var x = 12.5;
  var screen = 12.5 * 4;
  var index1 = 0;
  setInterval(function() {
    if (Math.round(index1 + screen) == 100) {
      $('.insta__slide').removeClass('animated');
      index1 = 0;
      $('.insta__slide').css('transform', 'translateX(-' + index1 + '%');
      setTimeout(function() {
        $('.insta__slide').addClass('animated');
      }, 1000);

    } else {
      index1 += x;
      $('.insta__slide').css('transform', 'translateX(-' + index1 + '%');
    }
  }, 1000);
  $(".fa-bars").click(function(e) {
    if (!e)
      e = window.event;

    //IE9 & Other Browsers
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    //IE8 and Lower
    else {
      e.cancelBubble = true;
    }
    $(".menu--mobile__lv2").addClass("active");
    $("#wrapper").addClass("active1");
  });
  $("#wrapper").click(function() {
    $(this).removeClass("active1");
    $(".menu--mobile__lv2").removeClass("active");
  });
  $(".down").click(function() {
    $(".fa-angle-down").toggleClass("disable");
    $(".fa-angle-up").toggleClass("disable");
    $(".down ul").toggleClass("up__down");
  });
});