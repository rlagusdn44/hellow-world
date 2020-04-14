/* works.js */

$(function(){
	var Num = 0;
	var Length = $('.works_list > div').length;
	$('.works_list > div').eq(Num).show();
	console.log(Num);
	$('.next_btn').bind('click',function(){
		
		Num = Num+1;
		console.log(Num);
		if(Num>Length-1){
			Num = 0;
		}
		$('.works_list > div').hide();
		$('.works_list > div').eq(Num).fadeIn('1000');
	});
	$('.prev_btn').bind('click',function(){
		Num = Num-1;
		if(Num<0){
			Num = Length-1;
		}
		$('.works_list > div').hide();
		$('.works_list > div').eq(Num).fadeIn('1000');
	});
});

