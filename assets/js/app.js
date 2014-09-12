$(document).ready(function() {

  $('#preloader').velocity('transition.fadeOut', {duration: 500, complete: function(){
    $(this).remove();
  }
})

$(function() {
    FastClick.attach(document.body);
});

if (!Modernizr.svg) {
  $('img[src*="svg"]').attr('src', function() {
    return $(this).attr('src').replace('.svg', '.png');
  });
}
});

$navigationLink = $('.main-nav').find('a');
$body = $('body');

var $mainForm = $('.contact-form').find('input, textarea, label');
var $grid = $('.grid').find("figure");
var $gridLink = $grid.find("a");
var $headerImg = $('.masthead').find('img');
var $headerH1 = $('.masthead').find('h1');

$body.velocity('transition.slideLeftBigIn', {duration: 500});

// // Animation logic between different pages for grid items
$gridLink.on('click', function(event) {
  var $self = $(this);
  pageTransition($self, event);
});

$navigationLink.on('click', function(ev) {
  var $self = $(this);
  pageTransition($self, event);
});

pageTransition = function(self, event) {
  event.preventDefault();
  $body.velocity('transition.slideLeftBigOut', {duration: 500, complete: function() {
    window.location.href = self.attr('href');
  }
});
}

//Run once animations, uses localstorage to ensure they only fire once.
if (!localStorage.updated) {
  $mainForm.velocity('transition.slideLeftBigIn', {stagger: 250, drag: true});
  $headerH1.velocity('transition.slideUpBigIn', {delay: 500, duration: 500});
  $grid.velocity('transition.shrinkIn', {delay: 500, stagger: 250, drag: true});
  localStorage.updated = "true";
} else {
  $body.addClass('no-anim');
}
//
// //localStorage.clear();
