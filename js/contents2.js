/* contents.js */

$(document).ready(function(){
	var nowNum = 0;
	var maxLength= $('.contents_list > li').length;
	var header = $('header li');
	var next = $('.next');
	var prev = $('.prev');

	next.bind('click',function(){
		scroll('right')
	});
	prev.bind('click',function(){
		scroll('left')
	});
	
	function scroll(direction){
		var activeNum = $('.contents_list > li.active').index();
	if(direction=='right'){
		nowNum = activeNum++
		console.log(activeNum);
		nowNum =  nowNum+1;
		console.log(nowNum);
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
		nowNum = activeNum--;
		nowNum = nowNum-1;
		if(nowNum<0){
			nownum = maxLength-1;
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