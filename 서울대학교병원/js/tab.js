/* tab.js */
$(document).ready(function(){
	$('.tab_menu > a').eq(0).addClass('active');
	$('.new_bottom > .tab_bottom').eq(0).addClass('active');
});
$(function(){
	$('.tab_menu > a').bind('click',function(){
		var index = $(this).index();
		$('.tab_menu > a').removeClass('active');
		$(this).addClass('active');
		$('.new_bottom > .tab_bottom').removeClass('active');
		$('.new_bottom > .tab_bottom:eq('+index+')').addClass('active');
		console.log(index);
	});
});