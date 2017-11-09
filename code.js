$(document).ready(function () {


$("button").on("click", function () {

console.log("dzialam");

    var controlForm = $('div#accordion.panel-group'),
        currentEntry = $('div.panel.panel-default:first'),
        existing_tabs = $('div.panel.panel-default').length;
        newEntry = $(currentEntry.clone()).appendTo(controlForm);

        //all pannels addClass collapsed and show only new one
        //change previous pannel to grean and change label

    newEntry.find('div#headingOne').attr('id','headingFour').find('a').prop('href','#collapseFour').text('Collasible #4').addClass('collapsed');
    newEntry.find('div#collapseOne').attr('id','collapseFour').removeClass('in')


});



});