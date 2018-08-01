$(document).ready(function(){
    var index=0;
    var slide = document.querySelectorAll('.slide');
    var screen_album = 12.5*4;
    var x = 12.5;
    var index_album = 0;
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
    setInterval(function(){
        if(index+1>2){
            index=0;
        }else{
            index++;
        }
        $('.slide.active').removeClass('active');
        slide[index].className += ' active';
    },5000);
    /* -----album-slider-------*/ 
    album(index_album,screen_album,x);
    menubar();
    scrollToTop();
});
function album(index_album,screen,x){
    setInterval(function(){
        if(Math.round(index_album+screen)==100){
            $('.album__group').removeClass('animate');
            index_album =0;
            $('.album__group').css('transform','translateX(-'+index_album+'%');
            setTimeout(function(){
                $('.album__group').addClass('animate');
            },1);
        }else{
            index_album+=x;
            $('.album__group').css('transform','translateX(-'+index_album+'%');
        }
        
    },3000)
};
function menubar(){
    $('.header__bars--content').click(function(e){
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
        $('#wrapper').addClass('active-menu');
        $('#menu-bar').addClass('active-menu');
    });
    $('#submenu-bar').click(function(){
        $('.submenu-bar2').toggleClass('active-menu');
        document.getElementById('icon-menu').classList.toggle('fa-sort-down');
        document.getElementById('icon-menu').classList.toggle('fa-sort-up');
        $('#icon-menu').toggleClass('active');
    });
};
$('#wrapper').click(function() {
    $('#wrapper').removeClass('active-menu');
    $('#menu-bar').removeClass('active-menu');
});
function scrollToTop(){
    $('.scroll-top').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 800, function() {
            $('.scroll-top.active').removeClass("active");
        });
    })
}
$(window).on('resize', function(){
    var win = $(this); //this = window
    if (win.width() >= 992) {
        $('#wrapper').removeClass('active-menu');
        $('#menu-bar').removeClass('active-menu');
    }
});