$(document).ready(function() {

	$('#top5-list').children('li').first().children('a').addClass('active').next().addClass('is-open').show();
    
	$('#top5-list').on('click', 'li > a', function(e) {
		e.preventDefault();
    
	  	if (!$(this).hasClass('active')) {

		    $('#top5-list .is-open').removeClass('is-open').hide();
		    $(this).next().toggleClass('is-open').toggle();
		      
		    $('#top5-list').find('.active').removeClass('active');
		    $(this).addClass('active');
	  	} else {
	    	$('#top5-list .is-open').removeClass('is-open').hide();
	    	$(this).removeClass('active');
	  	}
	});

});