$(function () {
	$("#date").mask("99. 99. 9999");

	$(window).scroll(function () {
		if ($(this).scrollTop() >= 35) {
			$('.top__line').addClass('scroll');
		}
		else {
			$('.top__line').removeClass('scroll');
		}
	});
	var ww = $(window).width();
	$(window).resize(function () {
		ww = $(window).width();
	});
	console.log('hello jquery');

	if (ww >= 1200) {
		$('.calendar-slider__date').click(function (event) {
			event.preventDefault();
		});

	}
	$(".hidden-menu__open").click(function () {
		if (ww < 991) {
			if ($(this).hasClass('menu__active')) {
				$(this).removeClass('menu__active');
				$(this).parents('.main__list--hidden').find('.hidden__list').slideUp('slow');
			}
			else {
				$('.hidden__list').each(function () {
					$(this).slideUp('slow').parents('.main__list--hidden').find('.hidden-menu__open').removeClass('menu__active');
				});
				$(this).addClass('menu__active').parents('.main__list--hidden').find('.hidden__list').slideDown('slow');
			}
			return false;
		}
	});

	$('.language__btn--dot').click(function () {
		$('.language__btn--dot').removeClass('language__dot');
		$(this).addClass('language__dot');
	});

	$('.language__btn--hidden').click(function () {
		$('.language__btn--hidden').removeClass('language__hide');
		$(this).addClass('language__hide');
	});

	$('.menu__toggle').click(function () {
		$('body').addClass('body-menu')
	});
	$('.menu__close-btn').click(function () {
		$('body').removeClass('body-menu')
	});

	$('.events__date a').click(function () {
		event.preventDefault();
	});
	$(".event__slider").owlCarousel({
		loop: true,
		smartSpeed: 1200,
		dots: true,
		nav: false,
		items: 1,
		margin: 20
	});
	"use strict";

	var owl = $('.event__slider');
	owl.owlCarousel();
	$('.slider__nav--next').click(function () {
		owl.trigger('next.owl.carousel');
	})
	$('.slider__nav--prev').click(function () {
		owl.trigger('prev.owl.carousel');
	});

	$(".video-slider").owlCarousel({
		loop: true,
		smartSpeed: 1200,
		dots: true,
		items: 1,
		margin: 20
	});
	"use strict";

	$(".program-page__carousel").owlCarousel({
		loop: true,
		smartSpeed: 1200,
		dots: true,
		items: 1,
		margin: 20
	});
	"use strict";

	$('[data-fancybox]').fancybox({
		youtube: {
			controls: 1,
			showinfo: 1
		},
		vimeo: {
			color: 'f00'
		}
	});


	$('.filter').click(function () {
		var getvalue = $(this).attr('data-filter');
		$('.mix').hide();
		$('div.' + getvalue).show();
		$('figure.' + getvalue).show();
		$('.filter__btn').removeClass('active');
		$(this).addClass('active');

	});
	$('.reset').click(function () {
		$('.mix').show();
	});

	$('[data-fancybox="gallery"]').fancybox({
		margin: [44, 0, 22, 0],
		thumbs: {
			autoStart: true,
			axis: 'x'
		}
	})
	$('[data-fancybox="group"]').fancybox({
		margin: [44, 0, 22, 0],
		thumbs: {
			autoStart: true,
			axis: 'x'
		}
	})
	$(".no-link").click(function () {
		event.preventDefault();
	});
	$('.visible__btn').click(function () {
		$('.event__cart--hidden, .event__cart--hidden-lg, .event__cart--hidden-md').show();
	});

});
$(function () {
	$('.modal-open').click(function (event) {
		event.preventDefault();
		$(function () {
			$('#exampleModal').arcticmodal();
		})
	});
});



