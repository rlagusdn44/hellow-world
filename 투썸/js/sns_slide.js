/* sns_slide.js */

$(function(){
	var rLeftValue=0;
	var rValue=100;
	var rMenu=1;
	var rMenuLength=$(".comm > ul > li").length;
	var rMaxleft=(rMenuLength-rMenu)*rValue;

	$(".snswr > .next.sns_m").click(function(){
		$(".snswr > .prev.sns_m").css({display:"block"});
		rLeftValue-=rValue;
		if(rLeftValue<=-rMaxleft){
			rLeftValue=-rMaxleft;
		}
		$(".comm > ul").stop().animate({
			left: rLeftValue+"%"
		},300);
	});

	$(".snswr > .prev.sns_m").click(function(){
		$(".snswr > .next.sns_m").css({display:"block"});
		rLeftValue+=rValue;
		if(rLeftValue>=0){
			rLeftValue=0;
		}
		$(".comm > ul").stop().animate({
			left: rLeftValue+"%"
		},300);
	});
});