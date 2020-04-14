/* search.js */

$(function(){
	$('.ico_search').click(function(){
		$('.search_box_area').addClass('on');
		$('.btn_search_open').css('display','none');
		$('.btn_search_close').css('display','block');
		$('.tog_list').removeClass('on');
		$('.f_list').find('div').eq(0).hide();
		$('.global_menu ul li').parent().hide();
		$('#query').focus();
		return false;
	});
});

$(function(){
	$('.btn_search_close').click(function(){
		$('.search_box_area').removeClass('on');
		$('.btn_search_open').css('display','block');
		$('.btn_search_close').css('display','none');
		$('.ico_search').find('>a').focus();
		$('#query').focusout();
		return false;
	});
	$('.close_btn').click(function(){
		$('.search_box_area').removeClass('on');
		$('.btn_search_open').css('display','block');
		$('.btn_search_close').css('display','none');
	});
});