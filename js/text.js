/* text.js */

$(document).ready(function(){
	if(window.innerWidth<'678'){
		$('.contents_list').addClass('mob_text');
	}
	$(window).resize(function(){
		if(window.innerWidth<'678'){
			$('.contents_list').addClass('mob_text');
		}else{
			$('.contents_list').removeClass('mob_text');
		}
	});
	hometext1();
	
	function chars(){
			$('.core > p').lettering();
		}
});

function hometext1(){
	if($('.contents_list').hasClass('mob_text')==true){
		$('.text1').delay('500').animate({
			opacity:'1', top: '50%'
		},1000,function(){
			$('.text1').delay('5500').animate({
				opacity:'0'
			},500,function(){
			});
			$('.text1').delay('6000').animate({
				top: '48%'
			},function(){
			});
			$('.bg_img2').delay('4000').animate({
				opacity: '1'
			},1500,function(){
				hometext2();
			});
		});
	}else{
		$('.text1').delay('1000').animate({
			opacity: '1', top: '50%'
		},1000,function(){
		});
		$('.text2').delay('1700').animate({
			opacity: '1', top: '55%'
		},1000,function(){
		});
		$('.text3').delay('2400').animate({
			opacity: '1', top: '60%'
		},1000,function(){
			$('.text1,.text2,.text3').delay('4000').animate({
				opacity: '0'
			},500,function(){
			});
			$('.text1').delay('4500').animate({
				top: '52%'
			},function(){
			});
			$('.text2').delay('4500').animate({
				top: '57%'
			},function(){
			});
			$('.text3').delay('4500').animate({
				top: '62%'
			},function(){
			});
			$('.bg_img2').delay('4000').animate({
				opacity: '1'
			},1500,function(){
				hometext2();
			});
		});
	}
}

function hometext2(){
	$('.text4').delay('500').animate({
		opacity:'1', top: '50%'
	},1000,function(){
		$('.text4').delay('5500').animate({
			opacity:'0'
		},500,function(){
		});
		$('.text4').delay('6000').animate({
			top: '48%'
		},function(){
		});
		$('.bg_img2').delay('5500').animate({
			opacity: '0'
		},1500,function(){
			hometext1();
		});
	});
}
