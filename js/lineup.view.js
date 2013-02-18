$(document).ready(function(){


	// Resize display_wrapper
	if($('#display_wrapper.lineup-view').length > 0){
		$(window).resize(function(){
			size_display_wrapper();
		});
		size_display_wrapper();
	}

	// Ensure that the lineuo-outter
	// is consitently 100% of the screen - the height
	// of the top nav
	function size_display_wrapper(){

		outter 	= $('#display_wrapper.lineup-view');
		nav 	= $('#top_nav');

		nav_height 	= $(nav).outerHeight();
		new_height	= window.innerHeight - nav_height;
		$(outter).css('height', new_height);
		$(outter).find('.lineup-page').css('height', new_height);
	}

	// Setup the swipe on the lineup view
	window.lineupSwipe = new Swipe(
			document.getElementById('lineup-swiper')
		);

});