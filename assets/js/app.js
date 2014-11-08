(function() {

    'use strict';
    var doc = document,
        // body = doc.querySelectorAll("body"),
        // input = doc.querySelectorAll("input"),
        // textarea = doc.querySelectorAll("textarea"),
        // label = doc.querySelectorAll("label"),
        figure = doc.querySelectorAll("figure"),
        header = doc.querySelectorAll(".masthead h1");



    if (!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function () {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }

    //$('.contact-form').find('input, textarea, label').velocity('transition.slideLeftBigIn', {delay: 400, stagger: 125, drag: true});
    // $('.masthead').find('h1').
    Velocity(header, 'transition.slideUpBigIn', {delay: 400, duration: 500});
    // $('.grid').find("figure")
    Velocity(figure, 'transition.slideLeftBigIn', {delay: 400, stagger: 150, drag: true});
    // $('.profile-image').find('img').velocity('transition.slideDownBigIn', {delay: 400, duration: 600});

}());
