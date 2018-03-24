function aboutActive() {
    $(".navOption").removeClass("navOption--active");
    $("#about").addClass("navOption--active");
}

function projectsActive() {
    $(".navOption").removeClass("navOption--active");
    $("#projects").addClass("navOption--active");
}

function photographyActive() {
    $(".navOption").removeClass("navOption--active");
    $("#photography").addClass("navOption--active");
}

function writingActive() {
    $(".navOption").removeClass("navOption--active");
    $("#writing").addClass("navOption--active");
}

$(document).ready(function () {
    $("#about").on("click", aboutActive);
    $("#projects").on("click", projectsActive);
    $("#photography").on("click", photographyActive);
    $("#writing").on("click", writingActive);

});