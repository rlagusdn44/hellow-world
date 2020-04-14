/* bg_1.js */

$(document).ready(function() {
	visual();
});


function visual(){
	var on = 0;
	var visual = $('.bg_1 span');
	var timer = setInterval(function(){
		on == 0 ? on = 1 : on = 0;
		visual.eq(on).fadeIn(1500).siblings().fadeOut(1500);
	},7000);
}