$(document).ready(function() {
    $('.tooltip').tooltipster({
	    theme: ['tooltipster-light','tooltipster-custom'],
	    maxWidth: 227,
	    side: 'bottom'
	});
	
	$( ".drawer li" ).click(function() {
	  if( $(this).hasClass("open")  ) {
		  $(this).children(".hidden").slideUp();
		  $(this).removeClass("open");
	  } else {
		  $( ".drawer li .hidden" ).slideUp();
		  $(this).addClass("open");
		  	$(this).children(".hidden").slideDown( "slow", function() {
			  	 
		  });
	  }
	});
});