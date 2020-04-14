/* bg_1.js */

$(document).ready(function() {
		visual();
		visual2();
});


function visual(){
	var on = 0;
	var visual = $('.con1_img > div');
	var timer = setInterval(function(){
		on == 0 ? on = 1 : on = 0;
		visual.eq(on).fadeIn(1500).siblings().fadeOut(1500);
	},6000);
}

function visual2(){
	var on = 0;
	var visual = $('.con2_img_wrap .con1_img > div');
	var timer = setInterval(function(){
		on == 0 ? on = 1 : on = 0;
		visual.eq(on).fadeIn(1500).siblings().fadeOut(1500);
	},6000);
}

