/* mob_menu.js */

$(function(){
	var header = $('header li');
	$('.mob_menu > .menu_box > ul > li').click(function(){
		var index = $('.mob_menu > .menu_box > ul > li').index(this);
		$('.contents_list > li').removeClass('active');
		$('.contents_list > li:eq('+index+')').addClass('active');
		if(index>0){
			$('header').addClass('on');
		}
		if(index<1){
			$('header').removeClass('on');
		}
		if($('.contents_list > .home').hasClass('active')==true){
			$('.prev').css({display:'none'});
		}else{
			$('.prev').css({display:'block'})
		}
		if($('.contents_list > .contact').hasClass('active')==true){
			$('.next').css({display:'none'});
		}else{
			$('.next').css({display:'block'})
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
		$('.toggle_close').click();
	});
	$('.mob_bg').click(function(){
		$('.toggle_close').click();
	});
});