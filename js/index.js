function checkSize() {
    return $(window).width() > 1200;
}

$(document).ready(function() {
    if (checkSize()) {
        $("#logo-social").css("display", "inline-block");
        $("#donate").css("display", "inline-block");

        // $("#navbar").addClass("navnavbar-fixed-top");
    } else {
        $("#logo-social").css("display", "none");
        $("#donate").css("display", "none");
        // $("#navbar").removeClass("navnavbar-fixed-top");
        // $("#navbar").addClass("navnavbar-top");
    }



    // if (checkSize()) {
    //     $("#mobile-logo").css("display", "inline-block");
    // } else {
    //     $("#mobile-logo").css("display", "none");
    // }

    // logic for making nav bar responisve
    $(window).resize(function() {
        if (checkSize()) {
            $("#logo-social").css("display", "inline-block");
            $("#donate").css("display", "inline-block");

            // $("#navbar").addClass("navnavbar-fixed-top");
        } else {
            $("#logo-social").css("display", "none");
            $("#donate").css("display", "none");
            // $("#navbar").removeClass("navnavbar-fixed-top");
            // $("#navbar").addClass("navnavbar-top");
        }
    });


    // Handle section switching for content
    $('.backsplash ul li').click(function() {
        let i = $(this).index();
        $('.bottomsection').hide();
        $('#section' + (i+1)).show();
        $(this).siblings('li').css("fontWeight", "normal");
        $(this).css("fontWeight", "bold");
    });

    // Handle mouseover events for the dropdown menu
    $(".nav>li.dropdown").hover(
        function() {
            $(this).toggleClass("open");
        }
    );
 });
