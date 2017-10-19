jQuery(document).ready(function ($) {
	$(".menu-toggle").click(function () {
		$(".menu-toggle").toggleClass("active");
		$(".off-canvas-menu").toggleClass("active");
	});


	$('.menu-items').on('click', 'li', function () {
		var filter = $(this).attr('data-filter');
		$(".portfolio-items").isotope({
			filter: filter
		});
	});

	$('.portfolio-items').isotope({
		masonry: {
			horizontalOrder: true
		}
	});
});
