/* tab_banner.js */

$(function(){
	var nowNum = 0;
	$('.rigth_banner > a').click(function(){
		$('.rigth_banner > ul > li').eq(nowNum).hide();
		nowNum = nowNum+1;
		if(nowNum>1){
			nowNum = 0;
		}
		$('.rigth_banner > ul > li').eq(nowNum).fadeIn();
	});
});
$(document).ready(function(){
	if(window.innerWidth<'1200'){
		$('.rigth_banner > ul > li').eq(1).hide();
	}
	if(window.innerWidth<'897'){
		$('.rigth_banner > ul > li').show();
	}
	$(window).resize(function(){
		if(window.innerWidth<'1200'){
			$('.rigth_banner > ul > li').eq(1).hide();
		}else{
			$('.rigth_banner > ul > li').show();
		}
		if(window.innerWidth<'897'){
			$('.rigth_banner > ul > li').show();
		}
	});
});