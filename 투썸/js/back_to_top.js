/* back_to_top.js */

$(function(){
	setInterval(function(){

		if($(window).scrollTop()>=95){
			$(".back_to_top").css({display:'block'});
		}else{
			$(".back_to_top").css({display:'none'});
		}
	},50);
});