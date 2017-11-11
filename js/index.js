function checkSize() {
    return $(window).width() < 1200;
}

$(document).ready(function() {

    if (checkSize()) {
        $("#mobile-logo").css("display", "inline-block");
    } else {
        $("#mobile-logo").css("display", "none");
    }

    // logic for making nav bar responisve
    $(window).resize(function() {
        if (checkSize()) {
            $("#mobile-logo").css("display", "inline-block");
            // $("#navbar").addClass("navnavbar-fixed-top");
        } else {
            $("#mobile-logo").css("display", "none");
            // $("#navbar").removeClass("navnavbar-fixed-top");
            // $("#navbar").addClass("navnavbar-top");
        }
    });


    // Your code here.
    $('.backsplash ul li').click(function() {
    var i = $(this).index();
    $('.bottomsection').hide();
    $('#section' + (i+1)).show();
    $(this).siblings('li').css("fontWeight", "normal");
    $(this).css("fontWeight", "bold");
    });

});
