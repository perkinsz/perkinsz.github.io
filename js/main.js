"use strict";


jQuery(document).ready(function ($) {








	


$('.main_swipe').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: [

        ],
        autoplayHoverPause: true

    });



    $('.main_choose_content').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
        autoplayHoverPause: true

    });




// main-menu-scroll
//
//    jQuery(window).scroll(function () {
//        var top = jQuery(document).scrollTop();
//        var height = 300;
//        //alert(batas);
//
//        if (top > height) {
//            jQuery('.navbar-fixed-top').addClass('menu-scroll');
//        } else {
//            jQuery('.navbar-fixed-top').removeClass('menu-scroll');
//        }
//    });

// scroll Up

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });



//    $('#menu').slicknav();

    $('#mixcontent').mixItUp({
        animation: {
            animateResizeContainer: false,
            effects: 'fade rotateX(-45deg) translateY(-10%)'
        }
    });


//    $('.dropdown-menu').click(function (e) {
//        e.stopPropagation();
//    });


    //End
});




$(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
        $("nav").addClass("small");
    } else {
        $("nav").removeClass("small");
    }
});

$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});

