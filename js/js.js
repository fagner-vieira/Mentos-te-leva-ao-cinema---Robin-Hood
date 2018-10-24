$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $(".navbar").addClass("topBar");
            $(".nav").addClass("navOne > li > a");
        } else {
            $(".navbar").removeClass("topBar");
            $(".nav").removeClass("navOne > li > a");
        }
    });
});

var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});