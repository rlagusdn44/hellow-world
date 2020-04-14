/* width.js */

$(document).ready(function () {
    if (window.innerWidth < '1024') {
        $('#wrap .width').addClass('m_1024');
    }
    $(window).resize(function () {
        if (window.innerWidth < '1024') {
            $('#wrap .width').addClass('m_1024');
        } else {
            $('#wrap .width').removeClass('m_1024');
        }
    });
});
