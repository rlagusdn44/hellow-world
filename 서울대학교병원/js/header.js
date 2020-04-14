/* header.js */

$(function(){
	$('.gnb_box > ul > li').hover(function(){
		var index = $(this).index();
		$('.hd_sub').addClass('open');
		$('.hd_sub').stop(true,true).slideDown(300);
		$('.sub_menu > ul').removeClass('on');
		$('.sub_menu > ul:eq('+index+')').addClass('on');
		$('.gnb_box > ul > li').removeClass('on');
		$('.gnb_box > ul > li:eq('+index+')').addClass('on');
	});
	$('header#main_header').mouseleave(function(){
		$('.hd_sub').removeClass('open');
		if(window.innerWidth>'780'){
			$('.hd_sub').stop(true,true).slideUp(300);
		}
		$('.sub_menu > ul').removeClass('on');
		$('.gnb_box > ul > li').removeClass('on');
		$('.hd_sub').removeClass('all');
	});
	$('.btn_all_pc').click(function(){
		$('.hd_sub').addClass('open');
		if($('.hd_sub').hasClass('all')==true){
			$('.hd_sub').removeClass('all');
			$('.hd_sub').stop(true,true).slideUp(300);
		}else{
			$('.hd_sub').addClass('all');
			$('.hd_sub').stop(true,true).slideDown(300);
		}
	});
	$('#toggle_menu').change(function(){
		if($('#toggle_menu').is(':checked')){
			$('.gnb_wrap').stop(true,true).animate({right: '0', opacity: '1'},200);
			$('.menu_list > li').removeClass('active');
			$('.gnb_box > ul > li').removeClass('check');
			$('.sub_menu > ul').removeClass('check');
			$('.gnb_box > ul > li').eq(0).addClass('check');
			$('.sub_menu > ul').eq(0).addClass('check');
		}else{
			$('.gnb_wrap').stop(true,true).animate({right: '-100%', opacity: '0'},200);
			$('.menu_list > li').removeClass('active');
			$('.gnb_box > ul > li').removeClass('check');
			$('.sub_menu > ul').removeClass('check');
			$('.gnb_box > ul > li').eq(0).addClass('check');
			$('.sub_menu > ul').eq(0).addClass('check');
		}
	});

	$('.menu_list > li').click(function(){
		if($(this).hasClass('active')==true){
			$(this).removeClass('active');
		}else{
			$('.menu_list > li').removeClass('active');
			$(this).addClass('active');
		}
	});
	$('.gnb_box > ul > li').click(function(){
		var index = $(this).index();
		$('.gnb_box > ul > li').removeClass('check');
		$(this).addClass('check');
		$('.sub_menu > ul').removeClass('check');
		$('.sub_menu > ul:eq('+index+')').addClass('check');
	});
});

$(document).ready(function(){
	$('.gnb_box > ul > li').eq(0).addClass('check');
	$('.sub_menu > ul').eq(0).addClass('check');
	$(window).resize(function(){
		if(window.innerWidth>'800'){
			$('.gnb_wrap').stop(true,true).animate({right: '0', opacity: '1'},200);
			$('.sub_menu > ul').removeClass('on');
			$('.gnb_box > ul > li').removeClass('on');
			$('.hd_sub').removeClass('open').css({display: 'none'});
		}
	});
	$(window).resize(function(){
		if(window.innerWidth<'780'){
			$('.hd_sub').css({display: 'block'});
		}
	});
	if(window.innerWidth<'780'){
		$('.hd_sub').css({display: 'none'});
	}
});
$(function(){
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll >= 100){
			$('header#main_header').addClass('fixed');
			$('#content').addClass('fixed');
		}else{
			$('header#main_header').removeClass('fixed');
			$('#content').removeClass('fixed');
		}
	});
});
