$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $(".navbar").addClass("topBar");
        } else {
            $(".navbar").removeClass("topBar");
        }
    });
});