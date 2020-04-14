/* product_slide.js */

$(function(){
	var rLeftValue=0;
	var rValue=100;
	var rMenu=1;
	var rMenuLength=$(".product_menu > ul > li").length;
	var rMaxleft=(rMenuLength-rMenu)*rValue;

	$(".product_menu_wrap > .next").click(function(){
		$(".product_menu_wrap > .prev").css({display:"block"});
		rLeftValue-=rValue;
		if(rLeftValue<=-rMaxleft){
			rLeftValue=-rMaxleft;
		}
		$(".product_menu > ul").stop().animate({
			left: rLeftValue+"%"
		},300);
	});

	$(".product_menu_wrap > .prev").click(function(){
		$(".product_menu_wrap > .next").css({display:"block"});
		rLeftValue+=rValue;
		if(rLeftValue>=0){
			rLeftValue=0;
		}
		$(".product_menu > ul").stop().animate({
			left: rLeftValue+"%"
		},300);
	});
});