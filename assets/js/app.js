(function() {

    'use strict';

    var win = window,
        doc = win.document,
        $Q = doc.querySelector.bind(doc),
        body = $Q(doc.body),
        form = $Q('form *'),
        figure = $Q('figure'),
        profile = $Q('.profile-image img'),
        header = $Q('.masthead h1'),
        path = win.location.pathname.split('/')[1].split('.')[0] || '/',
        pageCheck = function(string) {
            if (path !== string) {
                return false;
            }
            if (path === '/') {
                path = 'home';
            }
            return true;
        };


    if (!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function () {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }
    

    Velocity(form, 'transition.slideLeftBigIn', {stagger: 125, drag: true});
    Velocity(header, 'transition.slideUpBigIn', {duration: 500});
    Velocity(figure, 'transition.slideLeftBigIn', {stagger: 150, drag: true});
    Velocity(profile, 'transition.slideDownBigIn', {duration: 600});

}());
