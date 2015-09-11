
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


$('.car-photo .main, .car-photo .inside, .car-photo .outside').click(function(event){
	$('.car-photo .photo').hide();
	$(event.target).find('.photo').show();
	return false;
});
$(document).click(function(){
	$('.car-photo .photo').hide();
});


function setCarCode (code) {
	document.getElementsByClassName('car-code-field')[0].value = code;
}