/* promotion_slide.js */


$(function(){
	var nowNum = 0;
	var lastNum = 6;
	var leftValue=$('.pm_list > ul > li').outerWidth();
	var rMenuLength=$('.pm_list > ul > li').length;
	var timer = 4000;
	var autoRun = setInterval(function(){rollingFn('next');},timer);
	var stopBtn = $('.btn_stop');
	var slideEvent = false;
	$('.pm_list > .next_btn').bind('click',function(){
		if(slideEvent==false){
			rollingFn('next');
			stopAndGoFn(true);
			slideEvent=true;
			setTimeout(function(){
				slideEvent = false;
			},650);
		}
	});
	$('.pm_list > .prev_btn').bind('click',function(){
		if(slideEvent==false){
			rollingFn('prev');
			stopAndGoFn(true);
			slideEvent=true;
			setTimeout(function(){
				slideEvent = false;
			},650);
		}
	});

	function rollingFn(direction){
			$(function(){$(window).resize(function(){
				leftValue=$('.pm_list > ul > li').outerWidth();
				$('.pm_list > ul').css({left: 0});
				nowNum = 0;
			});
		});
		if(direction=='next'){
			nowNum = nowNum +1;
			if(nowNum>rMenuLength-3){
				$('.pm_list > ul').css({left: 0});
				nowNum = 1;
			}
			$('.pm_list > ul').stop().animate({left: -leftValue*nowNum},600);
		}else{
			nowNum = nowNum-1;
			if(nowNum<0){
				$('.pm_list > ul').css({left: -leftValue*lastNum});
				nowNum = 5;
			}
			console.log(leftValue);
			$('.pm_list > ul').stop().animate({left: -leftValue*nowNum},600);
		}
	}
	function stopAndGoFn(bool){
		if(bool==true){
			clearInterval(autoRun);
		}else if(bool==false){
			autoRun = setInterval(function(){
				rollingFn('next');
			},timer);

		}
	}
});

