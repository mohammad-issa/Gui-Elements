$(document).ready(function(){
    $('#popup-action').click(function() {
        $('.popup').fadeIn("fast");
    });

    $(window).click(function(event) {
        if (event.target.className == 'popup') {
            $('.popup').fadeOut("fast");
        }
    });

    $(window).keydown(function(e) {
        if (e.keyCode == 27) {
            $('.popup').fadeOut("fast");

        }
    });
});