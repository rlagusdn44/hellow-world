/* fav.js */

$(function () {
    $('.fav .tog_list').click(function () {
        $(this).toggleClass('on');
        $(this).next('.f_list').toggle();
        return false;
    });
    $('.fav .close').click(function () {
        $('.fav .tog_list').removeClass('on');
        $('.fav .f_list').hide();
        return false;
    });
});
