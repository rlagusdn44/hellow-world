/* video.js */
$(function () {
    $('.video-tumbnails > h3').on('click', function (e) {
        $('.video_tum').css('display', 'none');
        $('.video').css('display', 'block');
    });
});
$(function () {
    $('.fms').click(function () {
        if ($('.fms').hasClass('on') == true) {
            $('.fms').removeClass('on');
        } else {
            $('.fms').addClass('on');
        }
    });
});
