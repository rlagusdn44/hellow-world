/* fms.js */
$(function(){
	$('.global_menu_btn').click(function(){
		$(this).parent().children('ul').toggle();
		$('.search_box_area').removeClass('on'); 
		$('.btn_search_open').css('display','block');
		$('.btn_search_close').css('display','none');
		$('.tog_list').removeClass('on'); $('.fav .f_list').find('div').eq(0).hide();
		$(this).parent().toggleClass('active');
		if($('.global_menu').is('.active')){
			$('.global_menu_btn').attr('title','닫기');
		}else{
			$('.global_menu_btn').attr('title','열기');
		}
	});
});