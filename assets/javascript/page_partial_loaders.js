function goToAbout() {
    $("#pageContentPartial").load("../pages/_about.html");
}

function goToProjects() {
    $("#pageContentPartial").load("../pages/_project_gallery.html");
}

function goToPhotography() {
    $("#pageContentPartial").load("../pages/_photography.html");
}

function goToWriting() {
    $("#pageContentPartial").load("../pages/_writing.html");
}

// function goToCaseStudy(pageNumber) {
//     $("#pageContentPartial").load("../pages/_case_study" + pageNumber + ".html");
// }

$(document).ready(function(){
    $("#pageContentPartial").load("../pages/_project_gallery.html");

    $("#about").on("click", goToAbout);

    $("#projects").on("click", goToProjects);

    $("#photography").on("click", goToPhotography);

    $("#writing").on("click", goToWriting);

    // $("#pinnaThumbnail").on("click", goToCaseStudy);

    // $("#megaphoneThumbnail").on("click", goToCaseStudy);

    // $("#atWhatCostThumbnail").on("click", goToCaseStudy);
});