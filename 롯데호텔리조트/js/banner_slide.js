/* banner_slide.js */
$(document).ready(function(){
	var nowNum = 0;
	var slideEvent = false;
	var maxLength = $('#banner_slide > ul > li').length;
	var timer = 5000;
	var autoRun = setInterval(function(){rollingFn('next');},timer);
	$('#banner_slide > ul > li').eq(0).animate({opacity: '1'},0);

	$('.next_btn').bind('click',function(){
		if(slideEvent==false){
		rollingFn('next');
		stopAndGoFn(true);
		slideEvent=true;
		setTimeout(function(){
				slideEvent = false;
			},800);
		}
	});
	$('.prev_btn').bind('click',function(){
		if(slideEvent==false){
		rollingFn('prev');
		stopAndGoFn(true);
		slideEvent=true;
		setTimeout(function(){
				slideEvent = false;
			},800);
		}
	});


	function rollingFn(direction){
		if(direction=='next'){
			nowNum = nowNum+1;
			if(nowNum>maxLength-1){
				nowNum = 0;
			}
			$('#banner_slide > ul > li').eq(nowNum).css('z-index', 1).stop().animate({opacity: '1'},800);
			$('#banner_slide > ul > li').eq(nowNum-1).delay('800').animate({opacity: '0'},0).css('z-index', 0);
		}else{
		nowNum = nowNum-1;
			if(nowNum<0){
				nowNum = maxLength-1;
			}
			$('#banner_slide > ul > li').eq(nowNum).css('z-index', 1).stop().animate({opacity: '1'},800);
			$('#banner_slide > ul > li').eq(nowNum+1).delay('800').animate({opacity: '0'},0).css('z-index', 0);
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