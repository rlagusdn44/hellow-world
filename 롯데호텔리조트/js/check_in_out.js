/* check_in_out.js */

$(function(){
	$('.group_btn').click(function(){
		if($('.group_depth').hasClass('on')==true){
			$('.group_depth').removeClass('on');
		}else{
			$('.group_depth').addClass('on');
		}
	});
	
	$('.group_depth > li').click(function(){
		 var click_text = $(this).children('a').text();
		$('.group_btn > span').text(click_text);
	});
});

$(function(){
	$('.group_btn2').click(function(){
		if($('.group_depth2').hasClass('on')==true){
			$('.group_depth2').removeClass('on');
		}else{
			$('.group_depth2').addClass('on');
		}
	});
	
	$('.group_depth2 > li').click(function(){
		 var click_text = $(this).children('a').text();
		$('.group_btn2 > span').text(click_text);
	});
});