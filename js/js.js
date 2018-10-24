$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $(".navbar").addClass("topBar");
        } else {
            $(".navbar").removeClass("topBar");
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