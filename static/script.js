console.log("Hello, this is script.js");

$(document).ready(function () {
    $('#add-location-form-longitude').submit(function(e){
        e.preventDefault();
        var newLocationLongitude = $('#new-location-longitude').val();
        if (!isNaN(newLocationLongitude) && newLocationLongitude >= 0 && newLocationLongitude <= 90) {
            // Input is a number
            console.log("Longitude:", newLocationLongitude);
        } else {
            // Input is not a number
            console.log("Invalid input for longitude:", newLocationLongitude);
        }
    }) 
    $('#add-location-form-latitude').submit(function(e){
        e.preventDefault();
        var newLocationLatitude = $('#new-location-latitude').val();
        if (!isNaN(newLocationLatitude) && newLocationLatitude >= 0 && newLocationLatitude <= 90) {
            // Input is a number
            console.log("Latitude:", newLocationLatitude);
        } else {
            // Input is not a number
            console.log("Invalid input for latitude:", newLocationLatitude);
        }
    })
})