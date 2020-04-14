/* top_visual.js */

$(document).ready(function() {
	if (window.innerWidth<'1024') {
		$('.topVisual').addClass('mTopVisual');
	}

	$(window).resize(function() {
		if (window.innerWidth<'1024') {
			$('.topVisual').addClass('mTopVisual');
		} else {
			$('.topVisual').removeClass('mTopVisual');
		}
	});

	mainVis1();
});

function mainVis1() {
	$('.mainVisual:eq(2)').hide();
	$('.topVisual').removeClass('vis02');
	$('.topVisual').removeClass('vis03');
	$('.mainVisual:eq(0)').show();
	$('.visBg').css('z-index', '1');
	$('.visBg01').css('z-index', '10');
	$('.visBg01 div').animate({
		width:'100%'
	}, 500, function() {
		$('.visBg03 div').css('width', '0px');
	});
	var visImg01Img=$('.mainVisual:eq(0) .visImg01 p .visWeb');
	var visImg02Img=$('.mainVisual:eq(0) .visImg02 p .visWeb');
	if ($('.topVisual').hasClass('mTopVisual')==true) {
		visImg01Img=$('.mainVisual:eq(0) .visImg01 p .visMob');
		visImg02Img=$('.mainVisual:eq(0) .visImg02 p .visMob');
	}
	visImg01Img.animate({
		right:'0px'
	}, 1000, function() {
	});
	visImg02Img.animate({
		left:'0px'
	}, 1000, function() {
		if ($('.topVisual').hasClass('mTopVisual')==true) {
			$('.mainVisual:eq(0) .visTxt03_1').animate({
				opacity:'1'
			}, 500, function() {
				visImg01Img.delay('2000').animate({
					right:'-100%'
				}, 500, function() {
				});
				visImg02Img.delay('2000').animate({
					left:'-100%'
				}, 500, function() {
					mainVis2();
				});
				$('.visTxt01 span, .visTxt02 span, .visTxt03 span').delay('2000').animate({
					opacity:'0'
				}, 500, function() {
				});
			});
		} else {
			$('.mainVisual:eq(0) .visTxt01_1').animate({
				opacity:'1'
			}, 500, function() {
				$('.mainVisual:eq(0) .visTxt01_2').animate({
					opacity:'1'
				}, 500, function() {
					$('.mainVisual:eq(0) .visTxt02_1').animate({
						opacity:'1'
					}, 500, function() {
						$('.mainVisual:eq(0) .visTxt02_2').animate({
							opacity:'1'
						}, 500, function() {
							$('.mainVisual:eq(0) .visTxt02_3').animate({
								opacity:'1'
							}, 500, function() {
								visImg01Img.delay('2000').animate({
									right:'-100%'
								}, 500, function() {
								});
								visImg02Img.delay('2000').animate({
									left:'-100%'
								}, 500, function() {
									mainVis2();
								});
								$('.visTxt01 span, .visTxt02 span, .visTxt03 span').delay('2000').animate({
									opacity:'0'
								}, 500, function() {
								});
							});
						});
					});
				});
			});
		}
	});
}
function mainVis2() {
	$('.mainVisual:eq(0)').hide();
	$('.topVisual').removeClass('vis03');
	$('.topVisual').addClass('vis02');
	$('.mainVisual:eq(1)').show();
	$('.visBg').css('z-index', '1');
	$('.visBg02').css('z-index', '10');
	$('.visBg02 div').animate({
		width:'100%'
	}, 500, function() {
		$('.visBg01 div').css('width', '0px');
	});
	var visImg01Img=$('.mainVisual:eq(1) .visImg01 p .visWeb');
	var visImg02Img=$('.mainVisual:eq(1) .visImg02 p .visWeb');
	if ($('.topVisual').hasClass('mTopVisual')==true) {
		visImg01Img=$('.mainVisual:eq(1) .visImg01 p .visMob');
		visImg02Img=$('.mainVisual:eq(1) .visImg02 p .visMob');
	}
	visImg01Img.animate({
		right:'0px'
	}, 1000, function() {
	});
	visImg02Img.animate({
		left:'0px'
	}, 1000, function() {
		if ($('.topVisual').hasClass('mTopVisual')==true) {
			$('.mainVisual:eq(1) .visTxt03_1').animate({
				opacity:'1'
			}, 500, function() {
				visImg01Img.delay('2000').animate({
					right:'-100%'
				}, 500, function() {
				});
				visImg02Img.delay('2000').animate({
					left:'-100%'
				}, 500, function() {
					mainVis3();
				});
				$('.visTxt01 span, .visTxt02 span, .visTxt03 span').delay('2000').animate({
					opacity:'0'
				}, 500, function() {
				});
			});
		} else {
			$('.mainVisual:eq(1) .visTxt01_1').animate({
				opacity:'1'
			}, 500, function() {
				$('.mainVisual:eq(1) .visTxt01_2').animate({
					opacity:'1'
				}, 500, function() {
					$('.mainVisual:eq(1) .visTxt02_1').animate({
						opacity:'1'
					}, 500, function() {
						$('.mainVisual:eq(1) .visTxt02_2').animate({
							opacity:'1'
						}, 500, function() {
							visImg01Img.delay('2000').animate({
								right:'-100%'
							}, 500, function() {
							});
							visImg02Img.delay('2000').animate({
								left:'-100%'
							}, 500, function() {
								mainVis3();
							});
							$('.visTxt01 span, .visTxt02 span, .visTxt03 span').delay('2000').animate({
								opacity:'0'
							}, 500, function() {
							});
						});
					});
				});
			});
		}
	});
}
function mainVis3() {
	$('.mainVisual:eq(1)').hide();
	$('.topVisual').removeClass('vis02');
	$('.topVisual').addClass('vis03');
	$('.mainVisual:eq(2)').show();
	$('.visBg').css('z-index', '1');
	$('.visBg03').css('z-index', '10');
	$('.visBg03 div').animate({
		width:'100%'
	}, 500, function() {
		$('.visBg02 div').css('width', '0px');
	});
	var visImg01Img=$('.mainVisual:eq(2) .visImg01 p .visWeb');
	var visImg02Img=$('.mainVisual:eq(2) .visImg02 p .visWeb');
	if ($('.topVisual').hasClass('mTopVisual')==true) {
		visImg01Img=$('.mainVisual:eq(2) .visImg01 p .visMob');
		visImg02Img=$('.mainVisual:eq(2) .visImg02 p .visMob');
	}
	visImg01Img.animate({
		right:'0px'
	}, 1000, function() {
	});
	visImg02Img.animate({
		left:'0px'
	}, 1000, function() {
		if ($('.topVisual').hasClass('mTopVisual')==true) {
			$('.mainVisual:eq(2) .visTxt03_1').animate({
				opacity:'1'
			}, 500, function() {
				visImg01Img.delay('2000').animate({
					right:'-100%'
				}, 500, function() {
				});
				visImg02Img.delay('2000').animate({
					left:'-100%'
				}, 500, function() {
					mainVis1();
				});
				$('.visTxt01 span, .visTxt02 span, .visTxt03 span').delay('2000').animate({
					opacity:'0'
				}, 500, function() {
				});
			});
		} else {
			$('.mainVisual:eq(2) .visTxt01_1').animate({
				opacity:'1'
			}, 500, function() {
				$('.mainVisual:eq(2) .visTxt02_1').animate({
					opacity:'1'
				}, 500, function() {
					visImg01Img.delay('2000').animate({
						right:'-100%'
					}, 500, function() {
					});
					visImg02Img.delay('2000').animate({
						left:'-100%'
					}, 500, function() {
						mainVis1();
					});
					$('.visTxt01 span, .visTxt02 span, .visTxt03 span').delay('2000').animate({
						opacity:'0'
					}, 500, function() {
					});
				});
			});
		}
	});
}

