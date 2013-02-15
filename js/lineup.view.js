$(document).ready(function(){

	// Resize lineup-outter
	if($('.lineup-outter').length > 0){
		$(window).resize(function(){
			size_display_wrapper();
		});
		size_display_wrapper();
	}

	// Ensure that the lineuo-outter
	// is consitently 100% of the screen - the height
	// of the top nav
	function size_display_wrapper(){

		outter 	= $('.lineup-outter');
		nav 	= $('#top_nav');

		nav_height 	= $(nav).outerHeight();
		console.log(nav_height);
		$(outter).css('height', (window.innerHeight - (nav_height * 2)));

	}

});