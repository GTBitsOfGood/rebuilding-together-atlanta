$(document).ready(function() {


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
