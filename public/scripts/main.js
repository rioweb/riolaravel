var main=function(){

  "use strict";

$('.nav li, .nav li a').click(function (e) {
		e.preventDefault();
		$('ul.nav > li').removeClass('active');
            $(this).addClass('active');
  	}); 




$(function(){

		 $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
     			var target = $(this.hash);
				target = target.length ? target : $('[name='+this.hash.slice(1)+']');
				if(target.length){
					$('html,body').animate({
						scrollTop:target.offset().top
					},1000);
					return false;
				}
			}
		})
	})

  	var topoffset = 50;


	$('body').scrollspy({ 
		target: 'header .navbar',
		offset: topoffset 
	});


	var hash = $(this).find('li.active a').attr('href');
	if(hash !== '#inicio') {
	    $('header nav').removeClass('hidden');
	    $('header nav').fadeIn('slow').addClass('visible');
	    $('.go-top').removeClass('hidden'); 
  } else {
	    $('header nav').fadeOut('slow').removeClass('visible');
 	    $('header nav').addClass('hidden');
	     $('.go-top').addClass('hidden');
  }
  // Add an inbody class to nav when scrollspy event fires
  $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
    var hash = $(this).find('li.active a').attr('href');
    if(hash !== '#inicio') {
  	  $('header nav').removeClass('hidden');
	    $('header nav').fadeIn(400).addClass('visible');
      $('.go-top').removeClass('hidden'); 
	} else {
	    $('header nav').fadeOut('slow').removeClass('visible');
	    $('header nav').addClass('hidden');
      $('.go-top').addClass('hidden');

	}
  });

  


};


$(window).load(function() {
  $("#bar").width(600);
  $(".loader").fadeOut(3000);
});

jQuery(document).ready(main);