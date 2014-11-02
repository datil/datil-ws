var t = $('#content').offset().top - 80;

$(document).scroll(function(){
	'use strict';
	    if($(this).scrollTop() > t)
	    {   
	    		$('.nav-datil').css({'background-color':'#FF7461'});
	    		$('.nav-datil .container').css({'border-bottom':'none'});

	    }
	    else{
	    	$('.nav-datil').css({'background-color':'transparent'});
	    	$('.nav-datil .container').css({'border-bottom':'thin solid #fff'});
	    } 
});