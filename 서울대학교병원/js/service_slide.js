/* service_slide.js */

$(function(){
	var nowNum = 0;
	var leftValue = $('.slide_box > ul > li').outerWidth();
	var maxLength = $('.slide_box > ul > li').length;
	var slideList = $('.slide_box > ul');
	var timer = 3000;
	var autoRun = setInterval(function(){rollingFn('next');},timer);
	var  lastNum = 7;

	$('.btn_next').bind('click',function(){
		stopFn(true);
		rollingFn('next');
	});

	$('.btn_prev').bind('click',function(){
		rollingFn('prev');
		stopFn(true);
	});
	function rollingFn(direction){
		$(function(){$(window).resize(function(){
				leftValue=$('.slide_box > ul > li').outerWidth();
				slideList.css({left: 0});
				nowNum = 0;
				});
			});
			if(direction=='next'){
			nowNum = nowNum +1;
			if(nowNum>maxLength-5){
				slideList.css({ left: '0'});
				nowNum = 1;
				slideList.stop().animate({ left: -leftValue*nowNum});
			}
			slideList.stop().animate({ left: -leftValue*nowNum})
		}else{
				nowNum = nowNum-1;
				if(nowNum<0){
					slideList.css({ left: -leftValue*lastNum});
					nowNum = 6;
				}
				console.log(nowNum);
				slideList.stop().animate({ left: -leftValue*nowNum})
		}
	}
		function stopFn(bool){
			if(bool==true){
				clearInterval(autoRun);
			}else if(bool==false){
				autoRun = setInterval(function(){
					rollignFn('next');
				},timer);
			}
		}
});