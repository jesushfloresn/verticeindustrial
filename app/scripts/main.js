var windowH = 0;
var windowW = 0;

//img text - 906 x 894

var animation = bodymovin.loadAnimation({
  container: document.getElementById('ysVI'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'scripts/plugins/animation.json'
});


$(document).ready(function(){	
	initializeSettings();
});


function initializeSettings(){
	windowH = $(window).height();
	windowW = $(window).width();
	resizeSectionsPage();
}

function resizeSectionsPage(){
	$('.ys-contentpage').css({
		'height' : windowH + 'px'
	});
}