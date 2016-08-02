/* -----------------------------
Pre Loader
----------------------------- */
$(window).load(function() {
	'use strict';
	$('.loading-icon').delay(500).fadeOut();
	$('#preloader').delay(800).fadeOut('slow');
});


/* -----------------------------
Backgroung slider
----------------------------- */
$(window).ready(function() {
	'use strict';
	$.vegas('slideshow', {
	  backgrounds:[
		{ src:'images/bg-slider/bg-1.jpg', fade:1000 }
	  ]
	})();
});

/* -----------------------------
Scroll into viewPort Animation
----------------------------- */
$(document).ready(function() {
	'use strict';
	$('.animated').appear(function() {
		var element = $(this),
			animation = element.data('animation'),
			animationDelay = element.data('animation-delay');
			if ( animationDelay ) {

				setTimeout(function(){
					element.addClass( animation + " visible");
				}, animationDelay);

			} else {
				element.addClass( animation + " visible");
			}
	});
});


/* -----------------------------
NiceScroll
----------------------------- */
$(document).ready(function() {
	'use strict';
    $("html").niceScroll({
		cursorcolor: '#E74C3C',
		cursoropacitymin: '1',
		cursorborder: '0px',
		cursorborderradius: '0px',
		cursorwidth: '5px',
		cursorminheight: 60,
		horizrailenabled: false,
		zindex: 1090
	});
  });

/*------------------------------
Close NavBar On Lightbox
------------------------------*/
$(document).ready(function(){
	$(".grid__item").click(function(){
		$(".sticky-bar-wrap").hide();
	});

	$(".action,action--close").click(function(){
		$(".sticky-bar-wrap").show();
	});
});


/* -----------------------------
IE 9 Placeholder fix
----------------------------- */
$('[placeholder]').focus(function() {
  var input = $(this);
  if (input.val() == input.attr('placeholder')) {
    input.val('');
    input.removeClass('placeholder');
  }
}).blur(function() {
  var input = $(this);
  if (input.val() == '' || input.val() == input.attr('placeholder')) {
    input.addClass('placeholder');
    input.val(input.attr('placeholder'));
  }
}).blur();



/* -----------------------------
Screenshot Load
----------------------------- */
$(document).ready(function() {
	'use strict';
	$('.view-project').on('click', function(e) {
		e.preventDefault();

		var href 			= $(this).attr('href') + ' .portfolio-project',
			portfolioWrap	= $('.porfolio-container'),
			contentLoaded 	= $('#portfolio-load'),
			offset			= $('#section-screenshots').offset().top;

		portfolioWrap.animate({'left':'-120%'},{duration:400,queue:false});
		portfolioWrap.fadeOut(400);
		$('html, body').animate({scrollTop: offset},{duration:800,queue:true});
		setTimeout(function(){ $('#portfolio-loader').fadeIn('fast'); },300);

		setTimeout(function(){
            contentLoaded.load(href, function(){
                $('#portfolio-loader').fadeOut('fast');
                contentLoaded.fadeIn(600).animate({'left':'0'},{duration:800,queue:false});
                $('.back-button').fadeIn(600);
            });
        },400);



	});

	$('.backToProject').on('click', function(e){
		e.preventDefault();

		var portfolioWrap	= $('.porfolio-container'),
			contentLoaded 	= $('#portfolio-load');

		contentLoaded.animate({'left':'105%'},{duration:400,queue:false}).delay(300).fadeOut(400);
        $(this).parent().fadeOut(400);
		setTimeout(function(){
            portfolioWrap.animate({'left':'0'},{duration:400,queue:false});
            portfolioWrap.fadeIn(600);
        },500);

	});

});



/* -----------------------------
BxSlider
----------------------------- */
$(document).ready(function() {
	'use strict';
	$('.testimonial-slider').bxSlider({
		pagerCustom: '#bx-pager',
		pager: true,
		touchEnabled: true,
		controls: false
	});
});


/* -----------------------------
Main navigation
----------------------------- */
$(document).ready(function() {
	'use strict';
	$('.nav').onePageNav({
		currentClass: 'current',
		scrollSpeed: 1000,
		easing: 'easeInOutQuint'
	});
	$(window).bind('scroll', function(e) {
		var scrollPos = $(window).scrollTop();
		scrollPos > 220 ? $('.sticky-section').addClass('nav-bg') : $('.sticky-section').removeClass('nav-bg');
	});
});


/* ------------------
Click For Rewards
------------------ */
$(document).ready(function(){
	$(".photo-box").click(function(){
		$(".photo-overlay").toggle();
	});
});
