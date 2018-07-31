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
});