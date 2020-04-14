/* imgslide.js */

$(document).ready(function () {
    var nowNum = 0;
    var index = $('.image_wrap > ul > li.on').index();
    var menu = 3;
    var value = $('.image_wrap > ul > li').width();
    value = value + 40;
    var menuLength = $('.image_wrap > ul > li').length;
    var maxleft = (menuLength - menu) * value;
    var nowLeft = 0;
    /*var autoRun = setInterval(function(){
    	imgSlide('right');
    },4000);*/
    $('.section2 .next').bind('click', function () {
        imgSlide('right');
    });
    $('.section2 .prev').bind('click', function () {
        imgSlide('left');
    });

    function imgSlide(direction) {
        if (direction == 'right') {
            index = index + 1;
            if (index > menuLength - 1) {
                index = 0;
            }
            $('.image_wrap > ul > li').removeClass('on').eq(index + 1).addClass('on');
            $('.tab_bar_wrap > ul > li').removeClass('on').eq(index).addClass('on');
            console.log(index);
            $('.image_wrap > ul > li').stop().animate({
                left: -index * value
            });
            return false;
        } else {
            index = index - 1;
            if (index < 0) {
                index = menuLength - 1;
            }
            $('.image_wrap > ul > li').removeClass('on').eq(index - 1).addClass('on');
            $('.tab_bar_wrap > ul > li').removeClass('on').eq(index).addClass('on');
            console.log(index);
            $('.image_wrap > ul > li').stop().animate({
                left: -index * value
            });
            return false;
        }
    }
    $(function () {
        $('.tab_bar_wrap > ul > li').click(function () {
            var index = $(this).index();
            $('.tab_bar_wrap > ul > li').removeClass('on');
            $(this).addClass('on');
            nowLeft -= value;
            $('.image_wrap > ul > li').stop().animate({
                left: -value * index
            });
            $('.image_wrap > ul > li').removeClass('on').eq(index).addClass('on');
            return false;
        });
    });
    /*
    function stopAndGoFn(bool){
    	if(bool==true){
    		clearInterval(autoRun);
    	}
    }
    */
});
