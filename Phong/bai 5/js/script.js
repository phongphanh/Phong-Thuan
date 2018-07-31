$(document).ready(function(){
    var index=0;
    var slide = document.querySelectorAll('.slide');
    $('.slider__button--next').click(function(){
        if(index+1>2){
            index=0;
        }else{
            index++;
        }
        
        $('.slide.active').removeClass('active');
        slide[index].className += ' active';
    });
    $('.slider__button--pre').click(function(){
        if(index-1<0){
            index=2;
        }else{
            index--;
        }
        $('.slide.active').removeClass('active');
        slide[index].className += ' active';
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
          $('.scroll-cart').addClass('fixed');
        } else {
            $('.scroll-cart').removeClass('fixed');
        }
        if ($(this).scrollTop() > 600) {
            $('.scroll-top').addClass('active');
          } else {
              $('.scroll-top').removeClass('active');
          }
    });
    $('#search-btn').click(function(){
        $('#wrapper').toggleClass('active');
        $('.search-top').toggleClass('active');
    });
});
