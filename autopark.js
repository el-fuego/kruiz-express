
var scrolledClass = 'thin-header';
window.onscroll = function () {
	if (+document.body.scrollTop > 80) {
		if (document.body.className.indexOf(scrolledClass) < 0) {
			document.body.className += ' ' + scrolledClass;
		}
	} else {
		document.body.className = document.body.className.replace(new RegExp(' ?' + scrolledClass), '')
	}
};
document.body.onscroll();


$('.car-photo .main img, .car-photo .inside img, .car-photo .outside img').click(function (event) {
	var url = $(event.target).attr('full-url');

	$('#full-photo').show().find('.image').css('background-image', 'url("' + url + '")');
	return false;
});
$(document).click(function(){
	$('#full-photo').hide();
});


function setCarCode (code) {
	document.getElementsByClassName('car-code-field')[0].value = code;
}