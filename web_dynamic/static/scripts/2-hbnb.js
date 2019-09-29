const readyDoc = () => {
    //document ready, call functions
    checkBoxList();
    checkStatusOk();
}


const checkBoxList = () => {
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
};

const checkStatusOk = () => {
    //Call function when document is ready
    let urlStatus = 'http://0.0.0.0:5001/api/v1/status/';
    $.get(urlStatus, function (data, status) {
	if (data.status === 'OK'){
	  $('DIV#api_status').addClass('available');
	}else{
	  $('DIV#api_status').remove('available');
	}
    });
};
