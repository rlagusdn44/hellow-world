/* img_slide.js */

$(function(){
	var rLeftValue=0;
	var rValue= 980;
	var rMenu=9;
	var rMenuLength=$('.img_slide ul li').length;
	var rMaxleft=(rMenuLength-rMenu)*rValue;
	var timer = 5000;
	var autoRun = setInterval(function(){rollingFn('next');},timer);
	var stopBtn = $('.btn_stop');
	var playBtn = $('.btn_play');

	$('.btn_next').bind('click',function(){
		rollingFn('next');
	});
	$('.btn_prev').bind('click',function(){
		rollingFn('prev');
	});
	stopBtn.bind('click',function(){
		stopBtn.addClass('off');
		playBtn.removeClass('off');
		stopAndGoFn(true);
	});
	playBtn.bind('click',function(){
		playBtn.addClass('off');
		stopBtn.removeClass('off');
		stopAndGoFn(false);
	});

	function rollingFn(direction){
		if(direction=='next'){
			rLeftValue-=rValue;
			if(rLeftValue<-rMaxleft){
				$('.img_slide_ul').css({
					left: 0
				});
				rLeftValue=-rValue;
			}
			$('.img_slide_ul').stop().animate({
				left: rLeftValue+"px"
			},600);
		}else{
			rLeftValue+=rValue;
			if(rLeftValue>0){
				$('.img_slide_ul').css({
					left: -rMaxleft +"px"
				});
				rLeftValue=-rMaxleft+rValue;
			}
			$('.img_slide_ul').stop().animate({
				left: rLeftValue+"px"
			},600);
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