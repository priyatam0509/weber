$(function() {
	   $( ".accordian li" ).click(function() {
	  if( $(this).hasClass("open")  ) {
		  $(this).children(".hidden").slideUp();
		  $(this).removeClass("open");
	  } else {
		  $( ".top-five li .hidden" ).slideUp();
		  $(this).addClass("open");
		  	$(this).children(".hidden").slideDown( "slow", function() {

		  });
	  }
	});

	$( ".glossary-row .word" ).click(function() {
		$(this).parent().toggleClass('open');
	});

	$('.tooltip').tooltipster({
	    theme: ['tooltipster-light','tooltipster-custom'],
	    maxWidth: 227,
	    side: 'bottom'
	});
});