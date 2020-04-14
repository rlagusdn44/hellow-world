/* insta_slide.js */

$(function(){
	var nowNum = 0;
	var lastNum = 6;
	var leftValue=$('.insta_slide > li').outerWidth();
	var rMenuLength=$('.insta_slide > li').length;
	var timer = 4000;
	var slideEvent = false;
	$('.insta_next').bind('click',function(){
		if(slideEvent==false){
			rollingFn('next');
			slideEvent=true;
			setTimeout(function(){
				slideEvent = false;
			},650);
		}
	});
	$('.insta_prev').bind('click',function(){
		if(slideEvent==false){
			rollingFn('prev');
			slideEvent=true;
			setTimeout(function(){
				slideEvent = false;
			},650);
		}
	});

	function rollingFn(direction){
			$(function(){$(window).resize(function(){
				leftValue = $('.insta_slide > li').outerWidth();
				$('.insta_slide').css({left: 0});
				nowNum = 0;
			});
		});
		if(direction=='next'){
			nowNum = nowNum +1;
			if(nowNum>rMenuLength){
				$('.insta_slide').css({left: 0});
				nowNum = 1;
				$('.insta_slide').stop().animate({left: -leftValue*nowNum},600);
			}
			$('.insta_slide').stop().animate({left: -leftValue*nowNum},600);
		}else{
			nowNum = nowNum-1;
			if(nowNum<0){
				$('.insta_slide').css({left: -leftValue*lastNum});
				nowNum = 5;
			}
			$('.insta_slide').stop().animate({left: -leftValue*nowNum},600);
		}
	}
});





