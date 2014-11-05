if(navigator.language.toLowerCase().indexOf("es") > -1){
	if(location.search.split('force=')[1] == undefined || location.search.split('force=')[1] == 'false')
		window.location.href = "http://" + document.domain;
}
$(document).ready(function(){
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

	$('.single-page-nav').singlePageNav({
                offset: $('.single-page-nav').outerHeight(),
                filter: ':not(.lan)'
            });
});