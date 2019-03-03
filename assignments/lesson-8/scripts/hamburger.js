$(document).ready(function() {
    $("#menu").on("click", expandMenu);
});


function expandMenu() {
    if ($("#menu").hasClass("expand")) {
        $(".menuLinks").removeClass("hiddenLink");
        $("#menu").removeClass("expand");
    }
    else {
        $(".menuLinks").addClass("hiddenLink");
        $("#menu").addClass("expand");
    }
}


