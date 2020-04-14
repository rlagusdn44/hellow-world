/* work_click.js */

$(function(){
	$('.works_list > div > span').click(function(){
		$(this).siblings('.detail').addClass('acitve');
		
	});
});


$(function(){
	$('.work_close').click(function(){
		$('.works_list > div > div').removeClass('acitve');
	});
});