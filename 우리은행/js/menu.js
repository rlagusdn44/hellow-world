/* menu.js */

$(function(){
	$('.sub > li > h3').click(function(){
		var $parentLi=$(this).parents("li");
		if($parentLi.attr('class')=='active'&& $parentLi.index()!=0){
			$parentLi.removeClass('active');
		}else{
			$('.sub > li').removeClass('active');
			$parentLi.addClass('active');
		}
	});
	$('#gnb_com > li > a').hover(function(){
		var $parentLi=$(this).parents("li");
		$('#gnb_com').addClass('open');
		$('.gnb_box').addClass('on');
		$('#gnb_com > li').removeClass('over');
		$parentLi.addClass('over');
	},function(){
		$('#gnb_com').mouseleave(function(){
			$('#gnb_com > li').removeClass('over');
			$('#gnb_com').removeClass('open');
			$('.gnb_box').removeClass('on');
			$('.sub > li').removeClass('active');
		});
	});
	$('#gnb_com > li > h3').click(function(){
		$('.sub').removeClass('mob_open');
		$('#gnb_com > li > h3').removeClass('icon_color');
		$(this).siblings('ul').addClass('mob_open');
		$(this).addClass('icon_color');
	});
});