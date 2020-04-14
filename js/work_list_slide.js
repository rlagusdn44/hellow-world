/* work_list_slide.js */

$(function(){
	var maxNum = $('.work_list > div').length;
		maxNum = maxNum-1;
	$('.works_list > div').click(function(){
		$('.work_list > div').removeClass('view');
		$('.works').addClass('open');
		var index = $('.works_list > div').index(this);
		$('.work_list > div:eq('+index+')').addClass('view');
		if($('.work_list > div').eq(0).hasClass('view')==true){
			$('.work_list_prev').css({display: 'none'});
		}else{
			if($('.work_list > div').eq(maxNum).hasClass('view')==true){
				$('.work_list_next').css({display: 'none'});
			}
		}
	});
	$(function(){
		$('.work_close').click(function(){
			$('.work_list > div').removeClass('view');
			$('.works').removeClass('open');
			$('.work_list_prev,.work_list_next').css({display: 'block'});
		});
	});

	$(function(){
		$('.work_list_next').click(function(){
		var viewNum = $('.work_list > .view').index();
			viewNum = viewNum+1;
			if(viewNum>=maxNum){
				viewNum = maxNum;
				$('.work_list_next').css({display: 'none'});
			}
			$('.work_list_prev').css({display: 'block'});
			$('.work_list > .view').removeClass('view');
			$('.work_list > div').eq(viewNum).addClass('view');
		});
		$('.work_list_prev').click(function(){
		var viewNum = $('.work_list > .view').index();
			viewNum = viewNum-1;
			if(viewNum<=0){
				viewNum = 0;
				$('.work_list_prev').css({display: 'none'});
			}
			$('.work_list_next').css({display: 'block'});
			$('.work_list > .view').removeClass('view');
			$('.work_list > div').eq(viewNum).addClass('view');
		});
	});
});
