(function($) {
	$(function() {
		$('#partners').jcarousel({
			circular: true,
			wrap: 'circular'
		});
		$('#partners').jcarouselAutoscroll({
			'interval': 5000
		});

		$('#partnersprev')
			.on('active.jcarouselcontrol', function() {
				$(this).removeClass('inactive');
			})
			.on('inactive.jcarouselcontrol', function() {
				$(this).addClass('inactive');
			})
			.jcarouselControl({
				target: '-=1'
			});

		$('#partnersnext')
			.on('active.jcarouselcontrol', function() {
				$(this).removeClass('inactive');
			})
			.on('inactive.jcarouselcontrol', function() {
				$(this).addClass('inactive');
			})
			.jcarouselControl({
				target: '+=1'
			});
		$('.topNavItem a').click(function(e){
			e.stopPropagation();
			$($(this).attr('href')).ScrollTo({offsetTop: 100});
			});
	});
})(jQuery);