$(document).ready(function(){
    
    $(window).on('load resize scroll',function() {
        if ($(this).scrollTop() > 35) {
          $('.header__content').addClass('fixed');
        } else {
            $('.header__content').removeClass('fixed');
        }
    });
})  
