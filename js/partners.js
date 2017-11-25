$( document ).ready(function() {

    // Your code here.
    $('.backsplash ul li').click(function() {
    var i = $(this).index();
    $('.bottomsection').hide();
    $('#section' + (i+1)).show();
    $(this).siblings('li').css("fontWeight", "normal");
    $(this).css("fontWeight", "bold");
    });

});
