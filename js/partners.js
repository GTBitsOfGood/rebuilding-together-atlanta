$( document ).ready(function() {

    // Your code here.
    $("#helpingHands").show();
    $('.backsplash ul li').click(function() {
    var i = $(this).index();
    $('.bottomsection').hide();
    $('#section' + (i+1)).show();
    $(this).siblings('li').css("fontWeight", "normal");
    $(this).css("fontWeight", "bold");
    });

    document.getElementById("myRange").addEventListener("input",
    function() {
        $('.sliderSection').hide();
        let val = $(this).val();
        if (val < 20) {
            $("#helpingHands").show();
        } else if (val < 40) {
            $("#goodNeighbor").show();
        } else if (val < 60) {
            $("#handyman").show();
        } else if (val < 80) {
            $("#foreman").show();
        } else if(val < 100) {
            $("#generalContractor").show();
        } else {
            $("#blockRenovator").show();
        }

    });

});
