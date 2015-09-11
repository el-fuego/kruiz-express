function slider (element, maxImages, disableOnHover) {

	var secDuration = 5;
	var imageNumber = 1;
	var timeout;
	var isHovered = false;
	     
	element.onmouseover = function () {
		isHovered = true;
	};
	element.onmouseout = function () {
		isHovered = false;
	};

	function changeImage(requiredImage) {


		if (!isHovered || !disableOnHover) {
			if (!requiredImage && requiredImage != 0){ 
				if(imageNumber < maxImages){
		            imageNumber++;
		        }
		        else{
		        	imageNumber = 1;
		        }
		    }
		    else{
		        if(requiredImage > maxImages){
		            imageNumber = 1;
		        }
		        else if(requiredImage < 1){
		            imageNumber = maxImages;
		        }
		        else{
		            imageNumber = requiredImage;
		        }
		    }
		    element.className = "image"+imageNumber;
		    
		}
		
	    clearTimeout(timeout);
	    timeout = setTimeout(changeImage, secDuration*1000);
	}

	var buttons = element.getElementsByClassName('change-image');
	Array.prototype.forEach.call(buttons, function(el){
		el.onclick = function () {
			changeImage(el.getAttribute('data-id'));
		}
	});
	


	var nextImage = element.getElementsByClassName('next-image');
	Array.prototype.forEach.call(nextImage, function(el){
		el.onclick = function () {
			changeImage(imageNumber+1);
		}
	});

	var prevImage = element.getElementsByClassName('prev-image');
	Array.prototype.forEach.call(prevImage, function(el){
		el.onclick = function () {
			changeImage(imageNumber-1);
		}
	});
	
	changeImage(1);
}


slider(document.getElementById('slider'), 10, false);
slider(document.getElementById('sales'), 6, true);




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

