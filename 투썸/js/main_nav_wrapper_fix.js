/* main_nav_wrapper_fix */
$(function(){
	var windowScroll=$(window).scrollTop();
	var startScroll=getStandardScroll();
	$(window).scroll(function() {
		windowScroll=$(window).scrollTop();
		startScroll=getStandardScroll();
		if (startScroll<=windowScroll) {
			$(".main_nav_wrapper").addClass("fix");
			if ($(".main_nav_wrapper").hasClass("fix")) {
				$(".main_nav_wrapper").fadeIn("13000");
			}
		} else {
			$(".main_nav_wrapper").removeAttr("style");
			$(".main_nav_wrapper").removeClass("fix");
		}
	});
	if (startScroll<=windowScroll) {
		$(".main_nav_wrapper").addClass("fix");
		if ($(".main_nav_wrapper").hasClass("fix")) {
			$(".main_nav_wrapper").fadeIn("13000");
		}
	} else {
		$(".main_nav_wrapper").removeAttr("style");
		$(".main_nav_wrapper").removeClass("fix");
	}
});
function getStandardScroll() {
	var scrollStandard=0;
	if ($("#wrap").hasClass("main")==true) {
		scrollStandard=40;
	} else {
		if ($("header").length > 0){ 
			scrollStandard=$(".location").offset().top+$(".location").height();
		}
	}
	return scrollStandard;
}