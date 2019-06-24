/*!
 * charlie
 * 
 * 
 * @author charlie
 * @version 1.0.0
 * Copyright 2019. ISC licensed.
 */
'use strict';


$(document).ready(function(){

/*HOME*/
	/*MAP*/
	$('.custom_fk ul li').hover(function(){
                $('.custom_fk ul li.active').removeClass('active');
                $('.map img').removeClass('active');
                $('.custom_fk .state').removeClass('active');
                var pays = $( this ).attr('data-item');
                $(this).addClass('active');
                $('.map .'+pays+'').addClass('active');
                $('.state.'+pays+'').addClass('active');
	});

        $('.sb-menu-trigger').click(function(){
                if ($( ".global-search-form" ).hasClass( "is-open" )) {
                        $('.global-search-form').removeClass('is-open');
                }else{
                        $('.global-search-form').addClass('is-open');
                }
                if ($( ".site-banner .quicklinks" ).hasClass( "is-open" )) {
                        $('.site-banner .quicklinks').removeClass('is-open');
                }else{
                        $('.site-banner .quicklinks').addClass('is-open');
                }
        });

        $(window).click(function() {
                $('.site-banner .quicklinks').removeClass('is-open');
                $('.global-search-form').removeClass('is-open');
        });

        $('.sb-menu-trigger').click(function(event){
                event.stopPropagation();
        });

});

