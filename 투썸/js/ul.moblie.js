/* ul.moblie.js */

$(function () {
    var liAry = [];

    for (var i = 0; i < $(".depth1 > li").length; i++) {
        liAry[i] = false;
    }

    $(".depth1 > li > h3").click(function () {
        var liIndex = $(this).parent("li").index();

        if (liAry[liIndex] == true) {
            $(this).parent("li").removeClass("active");
            $(this).parent("li").children("h3").removeClass("minus");
        } else {
            $(this).parent("li").addClass("active");
            $(this).parent("li").children("h3").addClass("minus");
        }

        liAry[liIndex] = !liAry[liIndex];

    });

    $("label.toggle_menu").click(function () {
        for (var i = 0; i < $(".depth1 > li").length; i++) {
            liAry[i] = false;
        }
        $(".depth1 > li").removeClass("active");
    });

});

$(function () {
    var liAry = [];

    for (var i = 0; i < $(".depth2 > li").length; i++) {
        liAry[i] = false;
    }

    $(".depth2 > li > h3").click(function () {
        var liIndex = $(this).parent("li").index();

        if (liAry[liIndex] == true) {
            $(this).parent("li").removeClass("active");
            $(this).parent("li").removeClass("plus");
            $(this).parent("li").children("h3").removeClass("minus");
        } else {
            $(this).parent("li").addClass("active");
            $(this).parent("li").addClass("plus");
            $(this).parent("li").children("h3").addClass("minus");
        }

        liAry[liIndex] = !liAry[liIndex];

    });

    $("label.toggle_menu").click(function () {
        for (var i = 0; i < $(".depth2 > li").length; i++) {
            liAry[i] = false;
        }
        $(".depth2 > li").removeClass("active");
    });

});
