/* quick_menu.js */

$(function(){
	$('.list > li').hover(function(){
		$('.list > li').removeClass('on');
		$(this).addClass('on');
	},function(){
		$('.list > li').mouseleave(function(){
			$('.list > li').removeClass('on');
		});
	});
});