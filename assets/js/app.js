(function() {

    'use strict';

    var win = window,
        doc = document,
        q = doc.querySelectorAll.bind(doc),
        body = doc.body,
        form = q('form *'),
        figure = q('figure'),
        profile = q('.profile-image img'),
        header = q('.masthead h1'),
        links = q('.main-nav a');

        // allow command-click and control-click to open new tab
        links.onclick = function() {
          if (event.metaKey || event.ctrlKey) {
            return;
          } else {
            event.preventDefault( Velocity(body, 'transition.fadeOut', {duration: 400}) );
          }
        };



    Velocity(body, 'transition.fadeIn', {duration: 400});
    Velocity(form, 'transition.slideLeftBigIn', { delay: 350, stagger: 125, drag: true});
    Velocity(header, 'transition.slideUpBigIn', { delay: 350, duration: 1000});
    Velocity(figure, 'transition.slideLeftBigIn', { delay: 350, stagger: 150, drag: true});
    Velocity(profile, 'transition.slideDownBigIn', { delay: 350, duration: 1000});

}());
