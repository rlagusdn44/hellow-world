/* footer.js */

$(function(){
	$('.info_list > li').hover(function(){
		$('.info_list > li').removeClass('on');
		$(this).addClass('on');
	},function(){
		$('.info_list > li').mouseleave(function(){
			$('.info_list > li').removeClass('on');
		});
	});
});