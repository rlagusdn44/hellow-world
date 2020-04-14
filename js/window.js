/* window.js */

$(document).ready(function(){
	$(function(){hideAndFadein();},50);
	function hideAndFadein (){
		if(window.innerWidth>'767'){
			$('.works_list > div').fadeIn();
		}
		$(window).resize(function(){
			if(window.innerWidth>'767'){
				$('.works_list > div').fadeIn();
			}else{
				$('.works_list > div').hide();
				$('.works_list > div').eq(0).fadeIn();
			}
		});
	}
});
