$(document).ready(function(){
    new WOW().init();
    $('#header__menu li').click(function(){
        $('#header__menu li.active').removeClass('active');
        $(this).addClass('active');
        var str= $(this).attr('id');
        var id = str.slice(5);
        $("html, body").animate({ 
            scrollTop: $("#"+id).offset().top
        }, 1000);
    });
    $(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();
		$('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance+80) {
                $('#header__menu li.active').removeClass('active');
                $('#header__menu li').eq(i).addClass('active');
            }
        });
    }).scroll();
    $('.header__bot--btn').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 800, function() {
            $('.header__bot--btn.active').removeClass("active");
        });
    })
    $(window).on('load resize scroll', function () {
        if ($(this).scrollTop() > $('#feature').position().top+20) {
            $('.header__bot--btn').addClass('active');
        } else {
            $('.header__bot--btn').removeClass('active');
        }
    });
    $('#btn-menu').click(function(){
        $('#menu-site').toggleClass('active');
        $('#wrapper').toggleClass('active');
        $('.header__top').toggleClass('active');
    });
})  
