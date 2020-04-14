/* footer.js */

$(function () {
    $('.family_site > a').click(function () {
        if ($('.family_site > ul').hasClass('open') == true) {
            $('.family_site > ul').removeClass('open');
        } else {
            $('.family_site > ul').addClass('open');
        }
    });
});
$(document).ready(function () {
    if (window.innerWidth < '901') {
        $('.right_menu > ul,.right_menu,.left_menu').addClass('clearfix');
    }
    $(window).resize(function () {
        if (window.innerWidth < '901') {
            $('.right_menu > ul,.right_menu,.left_menu').addClass('clearfix');
        } else {
            $('.right_menu > ul,.right_menu,.left_menu').removeClass('clearfix');
        }
    });
});
