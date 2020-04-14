/* rule.js */
$(function(){
	var bCheck=false;
	$('.toggle_area button').click(function(){
		bCheck=!bCheck;

		if(bCheck){
			$('.toggle_area').addClass('open');
		}else{
			$('.toggle_area').removeClass('open');
		}
	});
});


