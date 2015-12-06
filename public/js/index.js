$(document).ready(function(){


var animatedScroll = false;

	$(window).scroll(function(){
	    var position = $(window).scrollTop()
	    console.log(position)
	    if (!animatedScroll || position < 50) {
	        animatedScroll = true;
	        if  (position < 50){

	          $( "header").removeClass('shownav');
	    			$( "header" ).stop().animate({
	    			   "padding-top": '50px',
	    			}, 100, "linear", function(){
	    				animatedScroll = false;
	    			});

	    			$( ".info-row > div" ).stop().animate({
	    	  	  		"padding": "35px 0",
	    	    	}, 200, "linear", function(){ animatedScroll = false;})


	        } else {
	        $('header').addClass('shownav')
		  		$( "header" ).stop().animate({
			   	 	"padding-top": '10px',
			  	}, 100, "linear", function(){
			  		animatedScroll = false; 
			  	})

			  	$( ".info-row > div" ).stop().animate({
	    	  	  "padding": "80px 0",
	    	    }, 200, "linear", function(){ animatedScroll = false;})


	        }
	    }
	});



	$("#about-button").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#author").offset().top
	    }, 1000);
	});

	$("#home-button").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#home").offset().top
	    }, 1000);
	});

	$("#contact-button").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#contact").offset().top
	    }, 1000);
	});


})