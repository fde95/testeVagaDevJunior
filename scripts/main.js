$(document).ready(function(){
    AOS.init({
        delay: 300,
        once: true,
    });
    $('.register--driver--movement').mouseenter(function(){
        $('.register--driver--movement--seta').css({
            'scale' : '.8' ,
            'transition' : '1s',
        });
        $('.register--driver--movement--line').css({
            'transform': 'translate(200px)',
            'transition' : '1.3s'
        });
    });
    $('.register--link').mouseleave(function(){
        $('.register--driver--movement--seta').css({
            'scale' : '1' ,
            'transition' : '1s',
        });
        $('.register--driver--movement--line').css({
            'transform': 'translate(0)',
            'transition' : '1.3s'
        });
    });

    $('.register--customer--movement').mouseenter(function(){
        $('.register--customer--movement--seta').css({
            'scale' : '.8' ,
            'transition' : '1s',
        });
        $('.register--customer--movement--line').css({
            'transform': 'translate(200px)',
            'transition' : '1.3s'
        });
    });
    $('.register--link').mouseleave(function(){
        $('.register--customer--movement--seta').css({
            'scale' : '1' ,
            'transition' : '1s',
        });
        $('.register--customer--movement--line').css({
            'transform': 'translate(0)',
            'transition' : '1.3s'
        });
    });
})