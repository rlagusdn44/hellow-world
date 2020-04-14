/* header.js */

$(document).ready(function () {
    $('#toggle_menu').change(function () {
        if ($('#toggle_menu').is(':checked')) {
            $('.menu').addClass('open');
            $('.logo > a > i').addClass('on');
        } else {
            $('.menu').removeClass('open');
            $('.logo > a > i').removeClass('on');
        }
    });
    if (window.innerWidth < '1024') {
        $('.bottom_nav').addClass('on');
    }
    $(window).resize(function () {
        if (window.innerWidth < '1024') {
            $('.bottom_nav').addClass('on');
        } else {
            $('.bottom_nav').removeClass('on');
        }
    });
    if (window.innerWidth < '1200') {
        $('body').addClass('mob');
    }
    $(window).resize(function () {
        if (window.innerWidth < '1200') {
            $('body').addClass('mob');
        } else {
            $('body').removeClass('mob');
        }
    });
    $(function () {
        $('.depth3 > li > a').click(function () {
            var $parentLi = $(this).parents("li");
            if ($('.bottom_nav').hasClass('on') == true) {
                if ($parentLi.attr('class') == 'open') {
                    $parentLi.removeClass('open');
                } else {
                    $('.depth3 > li').removeClass('open');
                    $parentLi.addClass('open');
                }
            }
        });
    });
});
