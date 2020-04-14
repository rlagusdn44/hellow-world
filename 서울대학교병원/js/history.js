/* history.js */

$(document).ready(function(){
	var nowNum = 0;
	var maxLength = $('.history_list > li').length;
	$('.history_list > li').eq(nowNum).show();

	$('.history_next').bind('click',function(){
		$('.history_list > li').eq(nowNum).hide();
		nowNum = nowNum+1;
		if(nowNum > maxLength-1){
			nowNum = 0;
		}
		$('.history_list > li').eq(nowNum).fadeIn();
	});
	$('.history_prev').bind('click',function(){
		$('.history_list > li').eq(nowNum).hide();
		nowNum = nowNum-1;
		if(nowNum < 0){
			nowNum = 3;
		}
		$('.history_list > li').eq(nowNum).fadeIn();
	});
	$(window).resize(function(){
		if(window.innerWidth<'768'){
			$('.history_list > li').eq(nowNum).show();
		}
	});
});