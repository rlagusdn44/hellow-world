/* ul.js */

$(document).ready(function () {
    var selector = $(".main_nav_wrap .depth1 > li");
    var selector2 = $(".main_nav_wrap");

    selector.hover(function () {
        selector2.addClass("open");
        selector.removeClass("on");
        $(this).addClass("on");
    }, function () {
        selector2.mouseleave(function () {
            selector2.removeClass("open");
            selector.removeClass("on");
        });
    });
});
