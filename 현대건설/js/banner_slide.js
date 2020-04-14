/* banner_slide.js */

$(document).ready(function () {
    var touchEvent = false;
    var nowNum = 0;
    var maxLength = $('#slide_wrap > li').length;

    $('.section1 .next').bind('click', function () {
        bannerSlideFn('next');
        stopAndGoFn(true);
    });
    $('.section1 .prev').bind('click', function () {
        bannerSlideFn('prev');
        stopAndGoFn(true);
    });
    $(function () {
        var startX, startY, endX, endY;
        $("#contents_Wrap").on("touchstart", function (event) {
            startX = event.originalEvent.changedTouches[0].screenX;
            startY = event.originalEvent.changedTouches[0].screenY;
        });
        $('#contents_Wrap').on('touchend', function (event) {
            endX = event.originalEvent.changedTouches[0].screenX;
            endY = event.originalEvent.changedTouches[0].screenY;
            if (startX - endX > 100 && touchEvent == false) {
                bannerSlideFn('next');
                stopAndGoFn(true);
                touchEvent = true;
                setTimeout(function () {
                    touchEvent = false;
                }, 1000);
            }
            if (startX - endX < -100 && touchEvent == false) {
                bannerSlideFn('prev');
                stopAndGoFn(true);
                touchEvent = true;
                setTimeout(function () {
                    touchEvent = false;
                }, 1000);
            }
        });
    });
    var autoRun = setInterval(function () {
        bannerSlideFn('next');
    }, 7000);

    function bannerSlideFn(direction) {
        if (direction == 'next') {
            nowNum = nowNum + 1;
            if (nowNum > maxLength - 1) {
                nowNum = 0;
            }
        } else {
            nowNum = nowNum - 1;
            if (nowNum < 0) {
                nowNum = maxLength - 1;
            }
        }
        $('#slide_wrap > li').animate({
            opacity: '0'
        }, 0);
        $('#slide_wrap > li').removeClass('active');
        $('#slide_wrap > li').eq(nowNum).animate({
            opacity: '1'
        }, 200);
        $('#slide_wrap > li').eq(nowNum).addClass('active');
        text1();
        text2();
        text3();
    }

    function stopAndGoFn(bool) {
        if (bool == true) {
            clearInterval(autoRun);
        }
    }

    addactive();
    text1();
});

function addactive() {
    $('#slide_wrap > li').eq(0).addClass('active');
}

function text1() {
    if ($('.section1 .slide1').hasClass('active') == true) {
        $('.slide1 .char1').stop().delay('1000').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide1 .char1').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide1 .char2').stop().delay('1050').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide1  .char2').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide1 .char3').stop().delay('1100').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide1 .char3').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide1 .char4').stop().delay('1150').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide1 .char4').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide1 .char5').stop().delay('1200').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide1 .char5').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide1 .char6').stop().delay('1250').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide1 .char6').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide1 .char7').stop().delay('1300').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide1 .char7').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide1 .char8').stop().delay('1400').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide1 .char8').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide1 .char9').stop().delay('1450').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide1 .char9').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide1 .char10').stop().delay('1500').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide1 .char10').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide1 .char11').stop().delay('1550').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide1 .char11').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide1 .char12').stop().delay('1600').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide1 .char12').stop().animate({
                top: '0'
            }, 300);
        });
    } else {
        $('.slide1 .char1,.slide1 .char2,.slide1 .char3,.slide1 .char4,.slide1 .char5,.slide1 .char6,.slide1 .char7,.slide1 .char8,.slide1 .char9,.slide1 .char10,.slide1 .char11,.section1 .char12').stop().animate({
            opacity: '0',
            top: '50'
        });
    }
}

function text2() {
    if ($('.section1 .slide2').hasClass('active') == true) {
        $('.slide2 .char1').stop().delay('1000').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide2 .char1').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide2 .char2').stop().delay('1050').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide2  .char2').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide2 .char3').stop().delay('1100').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide2 .char3').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide2 .char4').stop().delay('1150').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide2 .char4').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide2 .char5').stop().delay('1200').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide2 .char5').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide2 .char6').stop().delay('1250').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide2 .char6').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide2 .char7').stop().delay('1300').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide2 .char7').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide2 .char8').stop().delay('1400').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide2 .char8').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide2 .char9').stop().delay('1450').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide2 .char9').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide2 .char10').stop().delay('1500').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide2 .char10').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide2 .char11').stop().delay('1550').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide2 .char11').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide2 .char12').stop().delay('1600').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide2 .char12').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide2 .char13').stop().delay('1650').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide2 .char13').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide2 .char14').stop().delay('1700').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide2 .char14').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide2 .char15').stop().delay('1750').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide2 .char15').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide2 .char16').stop().delay('1800').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide2 .char16').stop().animate({
                top: '0'
            }, 300);
        });
    } else {
        $('.slide2 .char1,.slide2 .char2,.slide2 .char3,.slide2 .char4,.slide2 .char5,.slide2 .char6,.slide2 .char7,.slide2 .char8,.slide2 .char9,.slide2 .char10,.slide2 .char11,.slide2 .char12,.slide2 .char13,.slide2 .char14,.slide2 .char15,.slide2 .char16').stop().animate({
            opacity: '0',
            top: '50'
        });
    }
}

function text3() {
    if ($('.section1 .slide3').hasClass('active') == true) {
        $('.slide3 .char1').stop().delay('1000').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide3 .char1').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide3 .char2').stop().delay('1050').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide3  .char2').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide3 .char3').stop().delay('1100').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide3 .char3').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide3 .char4').stop().delay('1150').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide3 .char4').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide3 .char5').stop().delay('1200').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide3 .char5').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide3 .char6').stop().delay('1250').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide3 .char6').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide3 .char7').stop().delay('1300').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide3 .char7').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide3 .char8').stop().delay('1400').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide3 .char8').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide3 .char9').stop().delay('1450').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide3 .char9').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide3 .char10').stop().delay('1500').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide3 .char10').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide3 .char11').stop().delay('1550').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide3 .char11').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide3 .char12').stop().delay('1600').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide3 .char12').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide3 .char13').stop().delay('1650').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide3 .char13').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide3 .char14').stop().delay('1700').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide3 .char14').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide3 .char15').stop().delay('1750').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide3 .char15').stop().animate({
                top: '0'
            }, 300);
        });
        $('.slide3 .char16').stop().delay('1800').animate({
            opacity: '1',
            top: '-10'
        }, 300, function () {
            $('.slide3 .char16').stop().animate({
                top: '0'
            }, 300);
        });
    } else {
        $('.slide3 .char1,.slide3 .char2,.slide3 .char3,.slide3 .char4,.slide3 .char5,.slide3 .char6,.slide3 .char7,.slide3 .char8,.slide3 .char9,.slide3 .char10,.slide3 .char11,.slide3 .char12,.slide3 .char13,.slide3 .char14,.slide3 .char15,.slide3 .char16').stop().animate({
            opacity: '0',
            top: '50'
        });
    }
}
