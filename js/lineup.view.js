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

		$(outter).css('height', $('#content-wrapper').height() - nav_height);

	}

});