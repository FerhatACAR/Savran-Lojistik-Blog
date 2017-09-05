(function ($) {
/*######################### Menu Scroll Properties ###############*/
		$(".nav.navbar-nav").addClass("shadow");
	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
			$(".nav.navbar-nav").removeClass("shadow");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
			$(".nav.navbar-nav").addClass("shadow");
		}
	});

})(jQuery);

/*########################   Back to Top ###########################*/
jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() >150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});
