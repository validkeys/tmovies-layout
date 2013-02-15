$(document).ready(function(){

	
	function toggle_main_menu(){

		open = $('#content-wrapper').hasClass('nav-out');

		if(open === true){
			
			$('#main-menu').addClass('closed');
			$('#main-menu-list').addClass('closed');
			$('#content-wrapper').removeClass('nav-out');

		} else {

			$('#content-wrapper').addClass('nav-out');
			$('#main-menu').removeClass('closed');
			$('#main-menu-list').removeClass('closed');

		}

	}

	// Main nav trigger
	$('a#main_menu_trigger').click(toggle_main_menu);

});