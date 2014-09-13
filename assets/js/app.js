$(document).ready(function() {

$(function() {
    FastClick.attach(document.body);
});

if (!Modernizr.svg) {
  $('img[src*="svg"]').attr('src', function() {
    return $(this).attr('src').replace('.svg', '.png');
  });
}
});

// $navigationLink = $('.main-nav').find('a');
var $body = $('body');

var $mainForm = $('.contact-form').find('input, textarea, label');
var $grid = $('.grid').find("figure");
// var $gridLink = $grid.find("a");
var $headerImg = $('.masthead').find('img');
var $headerH1 = $('.masthead').find('h1');
var $profile = $('.profile-image').find('img');
$body.velocity('transition.fadeIn', {duration: 450});

// // Animation logic between different pages for grid items
// $gridLink.on('click', function(event) {
//   var $self = $(this);
//   pageTransition($self, event);
// });
//
// $navigationLink.on('click', function(ev) {
//   var $self = $(this);
//   pageTransition($self, event);
// });
//
// pageTransition = function(self, event) {
//   event.preventDefault();
//   $body.velocity('transition.slideLeftBigOut', {duration: 500, complete: function() {
//     window.location.assign(self.attr('href'));
//   }
// });
// }

//Run once animations, uses localstorage to ensure they only fire once.
// if (!localStorage.updated) {
  $mainForm.velocity('transition.slideLeftBigIn', {delay: 500, stagger: 150, drag: true});
  $headerH1.velocity('transition.slideUpBigIn', {delay: 500, duration: 500});
  $grid.velocity('transition.slideLeftBigIn', {delay: 500, stagger: 150, drag: true});
  $profile.velocity('transition.slideDownBigIn', {delay: 500, duration: 600});
  // localStorage.updated = "true";
// } else {
//   $body.addClass('no-anim');
// }
//
// //localStorage.clear();
