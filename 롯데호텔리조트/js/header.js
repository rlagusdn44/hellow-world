/* header.js */

$(function(){
	$('.depth1 > li > a').hover(function(){
		$('.depth1 > li').removeClass('open');
		$(this).parents('li').addClass('open');
	});
	$('#header_bottom').mouseleave(function(){
		$('.depth1 > li').removeClass('open');
	});
});

$(function(){
	$('.depth1 > li > h3').click(function(){
		var $parent=$(this).parents('li');
			if($parent.hasClass('on')==true){
			$parent.removeClass('on');
		}else{
			$parent.removeClass('on');
			$parent.addClass('on');
		}
	});
});

$(function(){
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll >= 50){
			$('#header_wrap').addClass('on');
		}else{
			$('#header_wrap').removeClass('on');
		}
	});
});