$(document).ready(function () {


$("button").on("click", function () {

console.log("dzialam");

    var controlForm = $(this).find('.panel-group'),
        currentEntry = $(this).find('.panel:first'),
        newEntry = $(currentEntry.clone()).appendTo(controlForm);

    console.log("hello");

});



});