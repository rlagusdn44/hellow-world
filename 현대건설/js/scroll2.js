/* scroll2.js */
var m = matchMedia("screen and (min-width:1200px)");
$(document).ready(function (event) {

    var scrollEvent = false;
    var sec = $('#contents_Wrap > section');
    var navi = $('.quick_Navi > ul > li');
    var screen = $('html,body');
    chars();
    $(function () {
        if (window.innerWidth > '1199') {
            screen.on('mousewheel DOMMouseScroll', function (e) {
                e.preventDefault;
                var E = e.originalEvent;
                delta = 0;
                if (E.detail) {
                    delta = E.detail * -40;
                } else {
                    delta = E.wheelDelta;
                };
                if (delta < 0 && scrollEvent == false) {
                    scroll('down');
                    scrollEvent = true;
                    setTimeout(function () {
                        scrollEvent = false;
                    }, 700);
                    text();
                    text3();
                    text4();
                    text5();
                    text6();
                }
                if ($('.section1').hasClass('viewing') == true) {
                    $('.header_wrap').addClass('on');
                } else {
                    $('.header_wrap').removeClass('on');
                }
                if (delta > 0 && scrollEvent == false) {
                    scroll('up');
                    scrollEvent = true;
                    setTimeout(function () {
                        scrollEvent = false;
                    }, 700);
                    text();
                    text3();
                    text4();
                    text5();
                    text6();
                    if ($('.section1').hasClass('viewing') == true) {
                        $('.header_wrap').addClass('on');
                    } else {
                        $('.header_wrap').removeClass('on');
                    }
                }
            });
        }
    });
    if (m.matches) {
        function scroll(direction) {
            var hei = $('.section1').height();
            var maxNum = sec.length;
            var nowNum = 0;
            var viewNum = $('#contents_Wrap > .viewing').index();

            if (direction == 'down') {
                console.log(viewNum);
                nowNum = viewNum - 1;
                nowNum = nowNum + 1;
                console.log(nowNum);
                if (nowNum > maxNum - 1) {
                    nowNum = maxNum - 1;
                }
                sec.removeClass('viewing').eq(nowNum).addClass('viewing');
                navi.removeClass('on');
                $('.quick_Navi > ul > li:eq(' + nowNum + ')').addClass('on');
                screen.stop().animate({
                    scrollTop: hei * nowNum
                }, 500);

            } else {
                console.log(viewNum);
                nowNum = viewNum - 1;
                nowNum = nowNum - 1;
                console.log(nowNum);
                if (nowNum < 0) {
                    nowNum = 0;
                }
                sec.removeClass('viewing').eq(nowNum).addClass('viewing');
                navi.removeClass('on');
                $('.quick_Navi > ul > li:eq(' + nowNum + ')').addClass('on');
                screen.stop().animate({
                    scrollTop: hei * nowNum
                }, 500);
                console.log(nowNum);
            }
        }
    }
    $(function () {
        navi.click(function () {
            var hei = $('.section1').height();
            var viewNum = navi.index(this);
            var nowNum = 0;
            nowNum = viewNum;
            screen.stop().animate({
                scrollTop: hei * nowNum
            });
            sec.removeClass('viewing');
            $('#contents_Wrap > section:eq(' + nowNum + ')').addClass('viewing');
            navi.removeClass('on');
            $('.quick_Navi > ul > li:eq(' + nowNum + ')').addClass('on');
            if ($('.section1').hasClass('viewing') == true) {
                $('.header_wrap').addClass('on');
            } else {
                $('.header_wrap').removeClass('on');
            }
            text();
            text3();
            text4();
            text5();
            text6();
        });
    });
    if (m.matches) {
        screen.css({
            'overflow': 'hidden',
            'height': '100%'
        });
        $('#element').on('scroll touchmove mousewheel', function (event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });
    }

    function text() {
        if ($('.section2').hasClass('viewing') == true) {
            $('.section2 .char1').stop().delay('150').animate({
                opacity: '1',
                top: '-20'
            }, 300, function () {
                $('.section2 .char1').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section2 .char2').stop().delay('200').animate({
                opacity: '1',
                top: '-20'
            }, 300, function () {
                $('.section2  .char2').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section2 .char3').stop().delay('250').animate({
                opacity: '1',
                top: '-20'
            }, 300, function () {
                $('.section2 .char3').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section2 .char4').stop().delay('300').animate({
                opacity: '1',
                top: '-20'
            }, 300, function () {
                $('.section2 .char4').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section2 .char5').stop().delay('350').animate({
                opacity: '1',
                top: '-20'
            }, 300, function () {
                $('.section2 .char5').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section2 .char6').stop().delay('400').animate({
                opacity: '1',
                top: '-20'
            }, 300, function () {
                $('.section2 .char6').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section2 .char7').stop().delay('450').animate({
                opacity: '1',
                top: '-20'
            }, 300, function () {
                $('.section2 .char7').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section2 .char8').stop().delay('500').animate({
                opacity: '1',
                top: '-20'
            }, 300, function () {
                $('.section2 .char8').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section2 .char9').stop().delay('550').animate({
                opacity: '1',
                top: '-20'
            }, 300, function () {
                $('.section2 .char9').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section2 .char10').stop().delay('600').animate({
                opacity: '1',
                top: '-20'
            }, 300, function () {
                $('.section2 .char10').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section2 .char11').stop().delay('650').animate({
                opacity: '1',
                top: '-20'
            }, 300, function () {
                $('.section2 .char11').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section2 .char12').stop().delay('700').animate({
                opacity: '1',
                top: '-20'
            }, 300, function () {
                $('.section2 .char12').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section2 .char13').stop().delay('750').animate({
                opacity: '1',
                top: '-20'
            }, 300, function () {
                $('.section2 .char13').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section2 .char14').stop().delay('800').animate({
                opacity: '1',
                top: '-20'
            }, 300, function () {
                $('.section2 .char14').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section2 .char15').stop().delay('850').animate({
                opacity: '1',
                top: '-20'
            }, 300, function () {
                $('.section2 .char15').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section2 .char16').stop().delay('900').animate({
                opacity: '1',
                top: '-20'
            }, 300, function () {
                $('.section2 .char16').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section2 .char17').stop().delay('950').animate({
                opacity: '1',
                top: '-20'
            }, 300, function () {
                $('.section2 .char17').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section2 .char18').stop().delay('1000').animate({
                opacity: '1',
                top: '-20'
            }, 300, function () {
                $('.section2 .char18').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section2 .char19').stop().delay('1050').animate({
                opacity: '1',
                top: '-20'
            }, 300, function () {
                $('.section2 .char19').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section2 .char20').stop().delay('1100').animate({
                opacity: '1',
                top: '-20'
            }, 300, function () {
                $('.section2 .char20').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section2 .char21').stop().delay('1150').animate({
                opacity: '1',
                top: '-20'
            }, 300, function () {
                $('.section2 .char21').stop().animate({
                    top: '0'
                }, 300);
            });
        } else {
            $('.section2 .char1,.section2 .char2,.section2 .char3,.section2 .char4,.section2 .char5,.section2 .char6,.section2 .char7,.section2 .char8,.section2 .char9,.section2 .char10,.section2 .char11,.section2 .char12,.section2 .char13,.section2 .char14,.section2 .char15,.section2 .char16,.section2 .char17,.section2 .char18,.section2 .char19,.section2 .char20,.section2 .char21').animate({
                opacity: '0',
                top: '50'
            });
        }
    }

    function text3() {
        if ($('.section3').hasClass('viewing') == true) {
            $('.section3 .char1').stop().delay('100').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section3 .char1').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section3 .char2').stop().delay('150').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section3  .char2').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section3 .char3').stop().delay('200').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section3 .char3').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section3 .char4').stop().delay('250').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section3 .char4').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section3 .char5').stop().delay('300').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section3 .char5').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section3 .char6').stop().delay('350').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section3 .char6').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section3 .char7').stop().delay('400').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section3 .char7').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section3 .char8').stop().delay('550').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section3 .char8').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section3 .char9').stop().delay('600').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section3 .char9').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section3 .char10').stop().delay('650').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section3 .char10').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section3 .char11').stop().delay('700').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section3 .char11').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section3 .char12').stop().delay('750').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section3 .char12').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section3 .char13').stop().delay('800').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section3 .char13').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section3 .char14').stop().delay('850').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section3 .char14').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section3 .char15').stop().delay('900').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section3 .char15').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section3 .char16').stop().delay('950').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section3 .char16').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section3 .char17').stop().delay('1000').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section3 .char17').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section3 .char18').stop().delay('1050').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section3 .char18').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section3 .char19').stop().delay('1100').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section3 .char19').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section3 .char20').stop().delay('1150').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section3 .char20').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section3 .char21').stop().delay('1200').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section3 .char21').stop().animate({
                    top: '0'
                }, 300);
            });
        } else {
            $('.section3 .char1,.section3 .char2,.section3 .char3,.section3 .char4,.section3 .char5,.section3 .char6,.section3 .char7,.section3 .char8,.section3 .char9,.section3 .char10,.section3 .char11,.section3 .char12,.section3 .char13,.section3 .char14,.section3 .char15,.section3 .char16,.section3 .char17,.section3 .char18,.section3 .char19,.section3 .char20,.section3 .char21').stop().animate({
                opacity: '0',
                top: '50'
            });
        }
    }

    function text4() {
        if ($('.section4').hasClass('viewing') == true) {
            $('.section4 .char1').stop().delay('100').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section4 .char1').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section4 .char2').stop().delay('150').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section4  .char2').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section4 .char3').stop().delay('200').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section4 .char3').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section4 .char4').stop().delay('250').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section4 .char4').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section4 .char5').stop().delay('300').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section4 .char5').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section4 .char6').stop().delay('350').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section4 .char6').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section4 .char7').stop().delay('400').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section4 .char7').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section4 .char8').stop().delay('550').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section4 .char8').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section4 .char9').stop().delay('600').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section4 .char9').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section4 .char10').stop().delay('650').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section4 .char10').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section4 .char11').stop().delay('700').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section4 .char11').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section4 .char12').stop().delay('750').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section4 .char12').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section4 .char13').stop().delay('800').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section4 .char13').stop().animate({
                    top: '0'
                }, 300);
            });
        } else {
            $('.section4 .char1,.section4 .char2,.section4 .char3,.section4 .char4,.section4 .char5,.section4 .char6,.section4 .char7,.section4 .char8,.section4 .char9,.section4 .char10,.section4 .char11,.section4 .char12,.section4 .char13').stop().animate({
                opacity: '0',
                top: '50'
            });
        }
    }

    function text5() {
        if ($('.section5').hasClass('viewing') == true) {
            $('.section5 .char1').stop().delay('100').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section5 .char1').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section5 .char2').stop().delay('150').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section5  .char2').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section5 .char3').stop().delay('200').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section5 .char3').stop().animate({
                    top: '0'
                }, 300);
            });
        } else {
            $('.section5 .char1,.section5 .char2,.section5 .char3,.section5 .char4').stop().animate({
                opacity: '0',
                top: '50'
            });
        }
    }

    function text6() {
        if ($('.section6').hasClass('viewing') == true) {
            $('.section6 .char1').stop().delay('100').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section6 .char1').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section6 .char2').stop().delay('150').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section6  .char2').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section6 .char3').stop().delay('200').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section6 .char3').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section6 .char4').stop().delay('250').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section6 .char4').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section6 .char5').stop().delay('300').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section6 .char5').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section6 .char6').stop().delay('350').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section6 .char6').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section6 .char7').stop().delay('350').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section6 .char7').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section6 .char7').stop().delay('350').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section6 .char7').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section6 .char8').stop().delay('350').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section6 .char8').stop().animate({
                    top: '0'
                }, 300);
            });
            $('.section6 .char9').stop().delay('350').animate({
                opacity: '1',
                top: '-10'
            }, 300, function () {
                $('.section6 .char9').stop().animate({
                    top: '0'
                }, 300);
            });
        } else {
            $('.section6 .char1,.section6 .char2,.section6 .char3,.section6 .char4,.section6 .char5,.section6 .char6,.section6 .char7,.section6 .char8,.section6 .char9').stop().animate({
                opacity: '0',
                top: '50'
            });
        }
    }

    function chars() {
        $('.core > p').lettering();
    }
    $(window).resize(function () {
        if (window.innerWidth > '1199') {
            window.location.reload();
        }
        if (window.innerWidth <= '1200') {
            window.location.reload();
        }
    });
});
