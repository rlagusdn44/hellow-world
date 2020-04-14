/* contents.js */

$(document).ready(function(){
	var nowNum = 0;
	var maxLength= $('.contents_list > li').length;
	var header = $('header li');
	var next = $('.next');
	var prev = $('.prev');
	var scrollEvent = false;
	var touchEvent = false;
	var touchEvent = false;
	$(function(){
		$('html,body').on('mousewheel DOMMouseScroll',function(e){
		var E = e.originalEvent;
		delta = 0;
		if(E.detail){
			delta = E.detail*-40;
		}else{
			delta = E.wheelDelta;
		};
		if(delta < 0 && scrollEvent == false){
			scroll('right');
			scrollEvent = true;
			setTimeout(function(){
				scrollEvent = false;
			},1000);
		}
		if(delta > 0 && scrollEvent == false){
			scroll('left');
			scrollEvent = true;
				setTimeout(function(){
					scrollEvent = false;
				},1000);
			}
		});
	});

	$(function(){
		var startX,startY, endX,endY;
		$("#contents_Wrap").on("touchstart",function(event){
			startX = event.originalEvent.changedTouches[0].screenX;
			startY = event.originalEvent.changedTouches[0].screenY;
		});
		$('#contents_Wrap').on('touchend',function(event){
			 endX=event.originalEvent.changedTouches[0].screenX;
			 endY=event.originalEvent.changedTouches[0].screenY;
			 if(startX-endX >100 && touchEvent == false){
				scroll('right');
				touchEvent = true;
					setTimeout(function(){
					touchEvent = false;
				},1000);
			 }
			 if(startX-endX<-100 && touchEvent == false){
				scroll('left');
				touchEvent = true;
					setTimeout(function(){
					touchEvent = false;
				},1000);
			 }
		});
	});
	function scroll(direction){
		var activeNum = $('.contents_list > li.active').index();
	if(direction=='right'){
		nowNum = activeNum;
		nowNum =  nowNum+1;
		if(nowNum>maxLength-1){
			nowNum = 3;
		}
		if(nowNum>0){
			$('header').addClass('on');
		}
		prev.css({display:'block'});

		$('.contents_list > li').removeClass('active').eq(nowNum-1).addClass('off');

		setTimeout(function(){
			$('.contents_list > li').removeClass('off');
		},800);
		$('.contents_list > li').eq(nowNum).addClass('active');

		if($('.contents_list > .contact').hasClass('active')==true){
			next.css({display:'none'});
		}else{
			next.css({display:'block'})
		}
		if($('.contents_list > .home').hasClass('active')==true){
			header.removeClass('check');
			$('header li.ho').addClass('check');
		}
		if($('.contents_list > .about').hasClass('active')==true){
			header.removeClass('check');
			$('header li.ab').addClass('check');
		}
		if($('.contents_list > .works').hasClass('active')==true){
			header.removeClass('check');
			$('header li.wo').addClass('check');
		}
		if($('.contents_list > .contact').hasClass('active')==true){
			header.removeClass('check');
			$('header li.co').addClass('check');
		}
		next.animate({
			right: '-50%'
		},0,function(){
			next.animate({
				right: '0'
			},1100);
		});
		prev.animate({
			left: '-50%'
		},0,function(){
			prev.animate({
				left: '0'
			},1100);
		});
	}else{
		nowNum = activeNum;
		nowNum = nowNum-1;
		if(nowNum<0){
			nownum = maxLength-1;
		}
		if(nowNum < 0){
			nowNum = 0;
		}
		if(nowNum<1){
			$('header').removeClass('on');
		}
		$('.contents_list > li').removeClass('active').eq(nowNum+1).addClass('off');
		setTimeout(function(){
			$('.contents_list > li').removeClass('off');
		},800);

		$('.contents_list > li').eq(nowNum).addClass('active');

		if($('.contents_list > .home').hasClass('active')==true){
			prev.css({display:'none'});
		}else{
			prev.css({display:'block'})
		}
		next.css({display:'block'});
		if($('.contents_list > .home').hasClass('active')==true){
			header.removeClass('check');
			$('header li.ho').addClass('check');
		}
		if($('.contents_list > .about').hasClass('active')==true){
			header.removeClass('check');
			$('header li.ab').addClass('check');
		}
		if($('.contents_list > .works').hasClass('active')==true){
			header.removeClass('check');
			$('header li.wo').addClass('check');
		}
		if($('.contents_list > .contact').hasClass('active')==true){
			header.removeClass('check');
			$('header li.co').addClass('check');
		}
		prev.animate({
			left: '-50%'
		},0,function(){
			prev.animate({
				left: '0'
			},1100);
		});
		next.animate({
			right: '-50%'
		},0,function(){
			next.animate({
				right: '0'
			},1100);
		});
	}
	}
});