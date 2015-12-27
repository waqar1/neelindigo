myApp.controller('craftsPageController', ['$scope', function($scope){

	$(".background").mousemove(function( event ) {
  		windowWidth = $(window).width();
		windowHeight = $(window).height();
		  
		mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
		mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
         $('.background').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseXpercentage + '%, rgba(92, 17, 214, 0.19), rgba(243, 243, 243, 0)), url(assets/images/background.jpg) no-repeat center center fixed');
	});

	$( '.hoverEffect' ).hover(
		function() {
	        $(this).addClass('animated pulse');
	    },
	    function() {
	        $(this).removeClass('animated pulse');
	    }
	);

	$('.hoverEffect').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(this).removeClass('bounceInDown');
		$(this).removeClass('animated');
		$(this).removeClass('pulse');
	});

}]);