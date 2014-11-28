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

        links.onclick = function() {
          if (event.metaKey || event.ctrlKey) {
            return;
          } else {
            event.preventDefault(function(){
              Velocity(body, 'transition.slideUpBigOut', {duration: 400});
            });
          }
        };
        // allow command-click and control-click to open new tab


    Velocity(body, 'transition.slideUpBigIn', {duration: 400});
    Velocity(form, 'transition.slideLeftBigIn', { delay: 400, stagger: 125, drag: true});
    Velocity(header, 'transition.slideUpBigIn', { delay: 400, duration: 1000});
    Velocity(figure, 'transition.slideLeftBigIn', { delay: 400, stagger: 150, drag: true});
    Velocity(profile, 'transition.slideDownBigIn', { delay: 400, duration: 1000});

}());
