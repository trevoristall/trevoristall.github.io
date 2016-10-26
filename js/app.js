var Preview = (function() {
	var s;

	return {
		settings: {
			img: document.getElementsByClassName('preview__img'),
			post: document.getElementsByClassName('preview')
		},

		init: function() {
			s = this.settings;
			this.display();
			this.mouseenter();
		},

		display: function() {
			if (s.img.length) {
				[].forEach.call(s.img, function(img) {
					img.style.opacity = 0;
				});
				s.img[0].style.opacity = 1;
			}
		},

		mouseenter: function() {
			if (s.post.length) {
				var currentIdx = 0,
				prevIdx = currentIdx;

				[].forEach.call(s.post, function(preview, idx) {
					preview.addEventListener('mouseenter', function() {
						prevIdx = currentIdx;
						currentIdx = idx;

						if (!(s.img[prevIdx].style.backgroundImage === s.img[currentIdx].style.backgroundImage)) {
							if (prevIdx !== currentIdx) {
								s.img[prevIdx].style.opacity = 0;
								s.img[currentIdx].style.opacity = 1;
							}	
						}
					});
				});
			}
		}
	}
})();

var wow = new WOW({
	animateClass: 'fade-in'
});

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       200,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);

document.addEventListener('DOMContentLoaded', function() {
	Preview.init();
	wow.init();
});
