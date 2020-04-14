$(function(){

	/* ==============================
	 * common
	 * ============================== */

	layerpopup(); //layerPop

	/* ==============================
	 * gnb
	 * ============================== */
	header();
	footer();

	/* ==============================
	 * content
	 * ============================== */
	
	visual();
	
	$('.sec07 .list').slick({
	  dots: false,
	  infinite: false,
	  arrows:false,
	  speed: 300,
	  slidesToShow: 3,
	  variableWidth: true,
	  responsive: [
	    {
	      breakpoint: 1440,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        centerMode: true
	      }
	    }
	  ]
	});
	
	$('.sec07 .arrowBtn .btnLeft').click(function(){
		$('.sec07 .list').slick('slickPrev');
		return false;
	});
	
	$('.sec07 .arrowBtn .btnRight').click(function(){
		$('.sec07 .list').slick('slickNext');
		return false;
	});
		
	resize();
	$(window).resize(function(){
		resize();
	});
	
	/* 2020-02-06 */
	if($('.topbanner').length){
		$('body').addClass('bannerOn')
	};
	/* //2020-02-06 */
	
});

function footer(){
	$('#footerWrap .btnGroup > a').click(function(){
		$(this).toggleClass('on').next().slideToggle();
		return false;
	})
}

function visual(){
	var idx = 0;
	var delay = 6000;
	var visual = $('.sec01 .visualImg span');
	var text = $('.sec01 .visualText');
	var timer = setInterval(function(){
		idx == 0 ? idx = 1 : idx = 0;
		visual.eq(idx).fadeIn(1500).siblings().fadeOut(1500);
		text.eq(idx).show().siblings('.visualText').hide();
	},delay);
}

function header(){
	var delay = 1000;
	var easing = 'easeInOutQuint';
	var idx = 0;
	var scrollIdx = 0;
	var max = 6;
	var check = true;
	slideM(idx);
	
	$('#headerWrap ul li a').click(function(){
		if(idx != $(this).data('index')){
			slideM($(this).data('index'));
		}
		
		return false;
	});

	$('.topbanner .title').click(function(){
		slideM(6);
		return false;
	})
	
	$('.btnAllWrapBox .allBox li a').click(function(){
		var winW = $(window).outerWidth();
		if(winW > 768){
			slideM($(this).data('index'));
			$('.btnAllWrapBox').removeClass('on');
		}else{
			var target = $(this).data('index');
			var top =$('#container > section').eq(target).offset().top
			$('html, body').animate({'scrollTop':top},1000,'easeInOutQuint')
			$('.btnAllWrapBox').removeClass('on');
		}
		return false;
	});
	
	$('#headerWrap h1 a').click(function(){
		var winW = $(window).outerWidth();
		if(winW > 768){
			slideM($(this).data('index'));
			$('body').removeClass('subWrap');
		}else{
			$('html, body').animate({'scrollTop':0},1000,'easeInOutQuint')
		}
		return false;
	});
	
	$('#headerWrap .btnAll').click(function(){
		$('.btnAllWrapBox').addClass('on');
		return false;
	});
	
	$('.btnAllWrapBox .allBox .btnClose,.btnAllWrapBox .bg').click(function(){
		$('.btnAllWrapBox').removeClass('on');
		return false;
	});
	
	$('.btnSectionPrev,.btnSectionNext').click(function(){
		slideM($(this).data('index'));
	});
	
	$('html, body').on("mousewheel DOMMouseScroll",function(e){
		var winH = $(window).outerHeight();
		var winW = $(window).outerWidth();
		if(winH > 600 && winW > 768){
			if(check){
				check = false;
				var E = e.originalEvent;
		        if (E.wheelDelta < 0) {
		        	scrollIdx == max ? scrollIdx = max : scrollIdx++;
		        	
					slideM(scrollIdx);
		        }else{
		        	scrollIdx == 0 ? scrollIdx = 0 : scrollIdx--;
					slideM(scrollIdx);
		        };
		        setTimeout(function(){
		        	check = true;
		        },1500);
		        
	        }
        }
	})
	
	scrollHeader();
	$(window).scroll(function(){
		scrollHeader();
	})
	
	function scrollHeader(){
		var top = 60;
		var scrollT = $(window).scrollTop();
		var winW = $(window).outerWidth();
		if(winW < 768){
			if(top < scrollT){
				$('#headerWrap').addClass('fixed')
			}else{
				$('#headerWrap').removeClass('fixed')
			}
		}else{
			$('#headerWrap').removeClass('fixed')
		}
	}

	function slideIdx(){
		if(idx == 0){
			$('body').removeClass('subWrap');
			$('#headerWrap ul li').removeClass('on');
		}else{
			$('body').addClass('subWrap');
			var number = [0,1,2,3,3,4]
			$('#headerWrap ul li').removeClass('on').eq(number[idx-1]).addClass('on');
		}
		
		/*
		if(idx == max){
			$('#container').css('margin-bottom',400);	
		}else{
			$('#container').css('margin-bottom',0);	
		};
		*/
	}
	
	function slideM(t){
		$('#container > section').removeClass('on').eq(idx).addClass('off');
		
		setTimeout(function(){
			$('#container > section').removeClass('off');
		},1000);
		
		idx = t;
		scrollIdx = idx;
		
		$('#container > section').eq(idx).removeClass('off').addClass('on');
		slideIdx();
	};
}

function resize(){
	var winH = $(window).outerHeight();
	var winW = $(window).outerWidth(); 
	$('#container').css('height',winH);
	if(winW <= 768){
		$('.sec01').css('height',winH - $('.topbanner').outerHeight());
	}else{
		$('.sec01').css('height','auto');
	}
}


/* 레이어 팝업 */
function layerpopup(){
	$(document).on('click','.layerPopOpen',function(){
		var href = $(this).attr('href');
		if(!href){
			href = $(this).data('href');
		}
		layerPopOpen(href,$(this));
		return false;
	});
}

function layerPopOpen(target,change){
	var winH = $(window).outerHeight(true),popH;
	var cont = $(target).find('.layerPopCont');
	$(target).addClass('on');
	setTimeout(function(){
		cont.focus();
	},30)
	popContposition();
	$(window).resize(function(){popContposition();});
	
	
	function popContposition(){
		cont.find('.contBox').css('height','auto')
		popH = cont.outerHeight();
		winH = $(window).outerHeight(true);
		cont.find('.contBox').css('height',popH - cont.find('.popTitle').outerHeight());
	}
	$('body').addClass('scrollLock');
	
	cont.find('.btnPopClose').last().on('keydown',function(e){
		var code = e.which;
		if(code == 9){
			$(this).closest('.layerPopCont').focus();
		};
	});
	
	layerPopClose(change);
}

function layerPopClose(target){
	$(document).on('click','.btnPopClose',function(){
		$(this).closest('.layerPopWrap').removeClass('on');
		$('body').removeClass('scrollLock');
		//$(this).closest('.layerPopCont').removeAttr('style');
		target.focus();
		
		return false;
	});
	$(document).on('click','.bg',function(){
		$(this).closest('.layerPopWrap').removeClass('on');
		$('body').removeClass('scrollLock');
		//$(this).siblings('.layerPopCont').removeAttr('style');
		target.focus();
		return false;
	});
}

/* parallax scrolling motion */
/*
	data-animation
	data-delay : 지연시간 1초 = 1000
	data-duration : 동작시간 1초 = 1000

	[waypoint]
	data-waypoint-once : 한번만 쓸지
	data-waypoint-point : 동작 포인트 (퍼센트)
*/

animation();
function animation(){
	hoverAnimation();
	scrollAnimation();
	numberAnimation();
	textAnimation();
	
	/* images background */
	imgBackground();
	ie_backgroundFixed();
}

function textAnimation(){
	$(window).load(function(){
		var $elements = $( '*[data-text-animation]' );
		var h = $(window).height();

		$elements.each( function( i, el ) {
			var $el = $( el );
			var animation = $el.data('text-animation'),
				number = $el.text(),
				timer;

			var _duration = 100,
			_delay = 0;
			if($el.data('duration') > 0) _duration = $el.data('duration');
			if($el.data('delay') > 0) _delay = $el.data('delay');

			$el.addClass(animation);

			textMotionType2($el,_duration,_delay);

			$el.waypoint(function(e){
				if(e == 'down'){
					textMotionType2($el,_duration,_delay);
				};
			}, { offset: waypointerCheck($el)[0] +'%',triggerOnce: waypointerCheck($el)[1]});
		});
	});
};

function numberAnimation(){
	$(window).load(function(){
		var $elements = $( '*[data-number-animation]' );
		var h = $(window).height();

		$elements.each( function( i, el ) {
			var $el = $( el );
			$el.css('opacity',1);
			if($el.data('number-animation') == 'count'){
				var _duration = 800,
					_delay = 0;
				var num = Math.floor($el.text());
				if($el.data('duration') > 0) _duration = $el.data('duration');
				if($el.data('delay') > 0) _delay = $el.data('delay');
				waypointerCheck($el);
				$el.waypoint(function(e){
					if(e == 'down'){
						$({val:0}).stop().delay(_delay).animate({val:num},{
							duration:_duration,
							step:function(){$el.text(addComma(Math.floor(this.val)))},
							complete:function(){$el.text(addComma(Math.floor(this.val)))}
						});
					};
				}, { offset: waypointerCheck($el)[0] +'%',triggerOnce: waypointerCheck($el)[1]});
			}else if($el.data('number-animation') == 'updown'){
				var $el = $( el );
				var number = $el.text();
				$el.text(addComma(Math.floor(number)));
				var split = $el.text().split('');
				var textHeight = 0;
				$el.text('');

				$.each(split,function(e){
					$('<div class="JSnumberMotionRow"><div></div></div>').appendTo($el)

					if(split[e] == ','){
						$el.find('.JSnumberMotionRow').eq(e).text(',');
					}else{
						var text = 0;
						for(var i = 0; i<20; i++){
							$('<div class="JSnumberMotion"></div>').appendTo($el.find('.JSnumberMotionRow').eq(e).children()).text(text)
							text >= 9 ? text = 0 : text++;
						};
					};

					textHeight = $el.find('.JSnumberMotion').height();
					$el.css('height',textHeight).find('.JSnumberMotionRow,.JSnumberMotion').css('height',textHeight);

					//motion();
					$el.waypoint(function(e){
						if(e == 'down'){
							motion();
						};
					}, { offset: waypointerCheck($el)[0] +'%',triggerOnce: waypointerCheck($el)[1]});
					function motion(){
						var random = Math.floor((Math.random() * 1000) + 500);
						$el.find('.JSnumberMotionRow').eq(e).children().css('margin-top','0').animate({'margin-top':-textHeight*(Math.abs(split[e]) + 10)},random,function(){
							// 초기화
							//$el.find('.JSnumberMotionRow').eq(e).children().css('margin-top','0').find('.JSnumberMotion').eq(split[e]).siblings().remove();
						});
					};
				});
			}else{
				var animation = $el.data('number-animation'),
					number = $el.text(),
					timer;
				var _duration = 100,
					_delay = 0;
				$el.addClass(animation).text(addComma(Math.floor(number)));
				if($el.data('duration') > 0) _duration = $el.data('duration');
				if($el.data('delay') > 0) _delay = $el.data('delay');

				textMotionType2($el,_duration,_delay);

				$el.waypoint(function(e){
					if(e == 'down'){
						textMotionType2($el,_duration,_delay);
					};
				}, { offset: waypointerCheck($el)[0] +'%',triggerOnce: waypointerCheck($el)[1]});
			}
		});
	});
}

/* 숫자 정규식 */
function addComma(num){
	var regexp = /\B(?=(\d{3})+(?!\d))/g;
	return num.toString().replace(regexp,',');
};

/* 클릭시 함수 호출 */
function textEffect(target,val){
	var $el = $(target),
	animation = $el.data('texteffect2'),
	number = val,
	timer;
	var _duration = 100,
		_delay = 0;
	$el.addClass(animation).text(addComma(Math.floor(number)));
	if($el.data('duration') > 0) _duration = $el.data('duration');
	if($el.data('delay') > 0) _delay = $el.data('delay');

	textMotionType2($el,_duration,_delay);
}

function textMotionType2(target,duration,delay){
	var timer;
	var split = target.text().split('');
	var last = split.length -1;

	target.text('');
	target.empty();
	clearTimeout(timer);
	$.each(split,function(e){
		$('<span class="JStextMotion"></span>').appendTo(target).text(split[e]).addClass(split[e] == ' ' ? 'space' : '');
		timer = setTimeout(function(){
			target.find('.JStextMotion').eq(target.data('reverse') ? last -e : e).addClass('on');
		},e*duration);
	});
}

function waypointerCheck(target){
	var Wpoint = 100,
		Wonce = false;
	if(target.data('waypoint-point')) Wpoint = target.data('waypoint-point');
	if(target.data('waypoint-once')) Wonce = target.data('waypoint-once');

	return [Wpoint,Wonce];
}

function scrollDD(target){
	$delay = target.data('delay'),
    $duration = target.data('duration');
	if($delay>0){target.css({'-webkit-animation-delay':$delay+'ms','animation-delay':$delay+'ms'})}
	if($duration>0){target.css({'-webkit-animation-duration':$duration+'ms','animation-duration':$duration+'ms'})}
}

function scrollAnimation(){
	$(window).load(function(){
		var $elements = $( '*[data-animation]' );
		var h = $(window).height();
		$elements.each( function( i, el ) {
			var $el = $( el ),
			    animationClass = $el.data('animation'),
			    $delay = $el.data('delay'),
			    $duration = $el.data('duration');
			var check = true;

			scrollDD($el);

			var t = $el.offset().top;
			if(t > h*waypointerCheck($el)[0]/100){
				$el.addClass('wait-animation');
			}
			$el.addClass('animated '+animationClass);

			$el.waypoint(function(){
				if(check){
					check = false;
					$el.removeClass('wait-animation');
				}else{
					check = true;
					$el.removeClass('animated '+animationClass);

					setTimeout(function(){
						$el.addClass('wait-animation animated '+animationClass);
					},10)
				}
			}, { offset: waypointerCheck($el)[0] +'%',triggerOnce: waypointerCheck($el)[1]});
		});
	});
};

function hoverAnimation(){
	$(window).load(function(){
		var $elements = $( '*[data-hover]' );
		var h = $(window).height();
		$elements.each( function( i, el ) {
			var $el = $( el ),
				animationClass = $el.data('hover'),
				$delay = $el.data('delay'),
				$duration = $el.data('duration'),
				$color = $el.data('color');
			var check = true;

			$el.append('<div class="after"></div><div class="before"></div>');

			scrollDD($el);

			/* line 색상만*/
			if($color && $el.data('hover').indexOf('line') >= 0){
				$el.find('.after').add($el.find('.before')).css({
					'background':$color
				})
			}
			$el.addClass('transition '+animationClass);
		});
	});
};


//랜덤값 추출
function randomNumber(min,max,point){
	return ((Math.random() * (max-min)) + min).toFixed(point);
};

//완료 인터렉션
function complateEffect(wrap,length){
	if(length > 20)length = 20;
	var $wrap = $(wrap),
		$itemLength = length,
		rdClass, rdClass2, rdLeft, rdTop, rdDelay,rdDirection, rdSpeed,
		rdLeftAry = [];
	for(var i = 0; i < $itemLength;i++){
		rdClass = randomNumber(1,3,0);
		//rdColor = randomNumber(1,3,0);
		rdColor = (i%3) + 1;
		rdLeft = randomNumber(0,20,0) * 5;
		rdTop = randomNumber(4,18,0) * 5;
		rdDelay = randomNumber(0,30,0) * 100;
		rdDirection = randomNumber(1,6,0);
		rdSpeed = randomNumber(30,70,0) * 100;

		if(rdLeftAry.indexOf(rdLeft) >= 0){		//left 랜덤값 겹치지않게
			i--;
		}else{
			rdLeftAry.push(rdLeft);
			if($wrap.hasClass('type2')){
				//코인
				rdSpeed = randomNumber(30,70,0) * 50;
				$wrap.prepend('<span class="item size'+rdClass+'" style="left:'+rdLeft+'%;animation:confettiDrop '+rdSpeed+'ms infinite ease-out '+rdDelay+'ms;"></span>');
			}else if($wrap.hasClass('type3')){
				//깜빡임
				rdSpeed = randomNumber(30,70,0) * 50;
				$wrap.prepend('<span class="item item'+rdClass+' color'+rdColor+'" style="left:'+rdLeft+'%;top:'+rdTop+'%;animation:confettiFlash '+rdSpeed+'ms infinite"></span>');
			}else{
				//꽃가루
				$wrap.prepend('<span class="item color'+rdColor+'" style="left:'+rdLeft+'%;animation:confettiSwing'+rdDirection+' '+(rdSpeed/2)+'ms infinite '+rdDelay+'ms, confettiDrop '+rdSpeed+'ms infinite ease-out '+rdDelay+'ms;"></span>');
			}
		}
	}
};

/* id background-fixed 해결안 */
function ie_backgroundFixed(){
	if(navigator.userAgent.match(/Trident\/7\./)){
		$('html,body').on('mousewheel',function(){
			event.preventDefault();

			var wheelDelta = event.wheelDelta;
			var currentScrollPosition = window.pageYOffset;
			window.scrollTo(0,currentScrollPosition - wheelDelta);
		});

		$('html, body').keydown(function(e){
			var wheelDelta = event.wheelDelta;
			var currentScrollPosition = window.pageYOffset;

			switch(e.which){
				case 38 : //up
					e.preventDefault();
					window.scrollTo(0,currentScrollPosition - 120);
					break;

				case 40 : //down
					e.preventDefault();
					window.scrollTo(0,currentScrollPosition + 120);
					break;
			}
		});
	};
}


function imgBackground(){;
	$(window).load(function(){
		var target = $('[data-background]');
		target.each(function(i,el){
			var $el = $(el);
			var animation = $el.data('background');
			var src = $el.data('background-url');
	
			$el.css({'overflow':'hidden','background-image':'url(' + src + ')','background-repeat':'no-repeat','background-size':'cover','background-position':'center center'});
			scrollAction();
			$(window).scroll(function(e){
				scrollAction();
			});
	
			function scrollAction(){
				var winT = $(window).outerHeight();
				var scrollT = $(window).scrollTop();
				var elT = $el.offset().top;
				var elH = $el.outerHeight();
	
				/* 천천히 올라가는거	*/
				switch(animation){
					case 'top':
						if(elT < scrollT + winT){
							$el.css('background-position-y',(scrollT - elT)/4);
						}
						break;
					case 'fixed':
						if(elT < scrollT + winT){
							$el.css('background-attachment','fixed');
						}
						break;
				};
			};
		});
	});
};