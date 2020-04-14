/* header.js */

$(function(){
	setInterval(function(){

		if($(window).scrollTop()>=95){
			$("#header_wrap").addClass('hei');
		}else{
			$("#header_wrap").removeClass('hei');
		}
	},50);
});