$(document).ready(function(){
    $('.header__dot').click(function(){
        i = $(this).index() * (-100);
        $('.header__dot').removeClass('active');
        $(this).addClass('active');
        for(var j=0;j<=2;j++){
            $('#slide'+j).css('transform','translateX('+i+'vw)');
        }
    });
    // var hasmenu = false;
    // $('.header__menu li').click(function(){
    //     if(!hasmenu){
    //         $('.sub-menu-'+$(this).attr('id')+' li').css('transform','translateY(0px)');

    //         hasmenu=true;
    //     }else{

    //     }
    // });
})  