(function() {

    'use strict';
    var doc = document,
        // body = doc.querySelectorAll("body"),
        form = doc.querySelectorAll("form *"),
        figure = doc.querySelectorAll("figure"),
        profile = doc.querySelectorAll(".profile-image img"),
        header = doc.querySelectorAll(".masthead h1");



    if (!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function () {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }

    //$('.contact-form').find('input, textarea, label').
    Velocity(form, 'transition.slideLeftBigIn', {stagger: 125, drag: true});
    // $('.masthead').find('h1').
    Velocity(header, 'transition.slideUpBigIn', {duration: 500});
    // $('.grid').find("figure")
    Velocity(figure, 'transition.slideLeftBigIn', {stagger: 150, drag: true});
    // $('.profile-image').find('img').
    Velocity(profile, 'transition.slideDownBigIn', {duration: 600});

}());
