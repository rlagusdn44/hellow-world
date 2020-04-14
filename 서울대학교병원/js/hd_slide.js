/* hd_slide.js */

$(function(){
	var nowNum = 0;
	var heightValue = $('.hd_slide > ul > li').outerHeight();
	$('.hd_slide_down_btn').click(function(){
			nowNum = nowNum+1;
			if(nowNum>4){
				$('.hd_slide > ul').css({"transform": "translate3d(0px, " + 0 + "px, 0px)"});
				nowNum=1;
			}
			console.log(nowNum);
		 $('.hd_slide > ul').css({"transform": "translate3d(0px, " + -heightValue*nowNum + "px, 0px)"});
	});
	$('.hd_slide_up_btn').click(function(){
			nowNum = nowNum-1;
			if(nowNum<0){
				$('.hd_slide > ul').css({"transform": "translate3d(0px, " + 0 + "px, 0px)"});
				nowNum=3;
			}
			console.log(nowNum);
		 $('.hd_slide > ul').css({"transform": "translate3d(0px, " + -heightValue*nowNum + "px, 0px)"});
	});
});