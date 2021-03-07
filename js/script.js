(function($) { 



$('[data-toggle="offcanvas"]').on('click', function () {
    $('.navbar-collapse').toggleClass('show');
    });


    
/* ================ Revolution Slider. ================ */
    if($('.tp-banner').length > 0){
        $('.tp-banner').show().revolution({
            delay:6000,
            startheight: 700,
            startwidth: 1170,
            hideThumbs: 1000,
            navigationType: 'none',
            touchenabled: 'on',
            onHoverStop: 'on',
            navOffsetHorizontal: 0,
            navOffsetVertical: 0,
            dottedOverlay: 'none',
            fullWidth: 'on'
        });
    }
    if($('.tp-banner-full').length > 0){
        $('.tp-banner-full').show().revolution({
            delay:6000,
            hideThumbs: 1000,
            navigationType: 'none',
            touchenabled: 'on',
            onHoverStop: 'on',
            navOffsetHorizontal: 0,
            navOffsetVertical: 0,
            dottedOverlay: 'none',
            fullScreen: 'on'
        });
    }   





/* ================ testimonials ================ */
    $(document).ready(function() {
        $(".testimonials_list").owlCarousel({
            loop: true,
            rewind: true,
            margin: 30,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                700: {
                    items: 1,
                    nav: false
                },
                900: {
                    items: 2,
                    nav: false
                },
                1170: {
                    items: 2,
                    nav: true
                }
            }
        });
    });


/* ================ testimonials ================ */
    $(document).ready(function() {
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                700: {
                    items: 1,
                    nav: false
                },
                900: {
                    items: 2,
                    nav: false
                },
                1170: {
                    items: 3,
                    nav: true,
                    loop: true
                }
            }
        });
    });

/* ================   home_teachers ================ */
    $(document).ready(function() {
        $(".home_teachers").owlCarousel({
            loop: true,
            rtl: true,
            margin: 30,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: true
                },
                700: {
                    items: 3,
                    nav: false
                },
                900: {
                    items: 4,
                    nav: false
                },
                1170: {
                    items: 4,
                    nav: true,
                    loop: true
                }
            }
        });
    });


/*==== Nav ====*/
    $('.navbar-collapse a').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });




/* ================ Nav ================ */
    $('.fa-caret-down').on("click", function(e) {
        e.preventDefault();
        $(this).next().slideToggle('');
    });


})(jQuery);

$('.nav-item').click(function () {
    "use strict";
    $(this).addClass('active').siblings().removeClass('active');
});



$(document).ready(function() {

    /*
    sessionStorage.setItem('lang', 'en');
    if(sessionStorage.getItem('lang') == 'ar'){
        $("link[href*='bootstrap.min.css']").attr("href", "css/bootstrap-rtl.css");
        $("link[href*='style.css']").attr("href", "css/style-rtl.css");
    }

    if (sessionStorage.getItem('lang') == 'en'){
        $("link[href*='bootstrap-rtl.css']").attr("href", "css/bootstrap.min.css");
        $("link[href*='style-rtl.css']").attr("href", "css/style.css");
    }

    $('.EnLang').click(function(){
        sessionStorage.setItem('lang', 'en');
       // location.reload();
        $("link[href*='bootstrap-rtl.css']").attr("href", "css/bootstrap.min.css");
        $("link[href*='style-rtl.css']").attr("href", "css/style.css");
    });
    $('.ArLang').click(function(){
        sessionStorage.setItem('lang', 'ar');
        //location.reload();
        $("link[href*='bootstrap.min.css']").attr("href", "css/bootstrap-rtl.css");
        $("link[href*='style.css']").attr("href", "css/style-rtl.css");
    });
    */

});