// Call function when document is ready
$(document).ready(function() {
    let amenityIdDict = {};
    $('input[name=checkbox]').change(function(){
	if($(this).is(':checked')){
	    //checkbox checked store AmenityID in variable dict
	    amenityIdDict[this.getAttribute('data-id')]= this.getAttribute('data-name');
	} else {
	    //checkbox not checked remove AmenityID
	    delete amenityIdDict[this.getAttribute('data-id')];
	}
	$('div.amenities h4').text(Object.keys(amenityIdDict).join(' , '));
    });
});