(function() {

    'use strict';
    var doc = document,
        body = doc.querySelectorAll("body");;


    if (!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function () {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }

    body.velocity( 'transition.slideDownBigIn', {duration: 400});
    $('.contact-form').find('input, textarea, label').velocity('transition.slideLeftBigIn', {delay: 400, stagger: 125, drag: true});
    $('.masthead').find('h1').velocity('transition.slideUpBigIn', {delay: 400, duration: 500});
    $('.grid').find("figure").velocity('transition.slideLeftBigIn', {delay: 400, stagger: 150, drag: true});
    $('.profile-image').find('img').velocity('transition.slideDownBigIn', {delay: 400, duration: 600});

}());
