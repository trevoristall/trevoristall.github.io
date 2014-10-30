$(document).ready(function ($) {

    'use strict';

    $(function () {
        FastClick.attach(document.body);
    });

    if (!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function () {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }

    $('body').velocity('transition.fadeIn', {duration: 450});
    $('.contact-form').find('input, textarea, label').velocity('transition.slideLeftBigIn', {stagger: 125, drag: true});
    $('.masthead').find('h1').velocity('transition.slideUpBigIn', {duration: 500});
    $('.grid').find("figure").velocity('transition.slideLeftBigIn', {stagger: 150, drag: true});
    $('.profile-image').find('img').velocity('transition.slideDownBigIn', {duration: 600});

});
