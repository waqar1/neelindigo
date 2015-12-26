myApp.controller('craftsPageController', ['$scope', function($scope){

	$(".background").mousemove(function( event ) {
  		windowWidth = $(window).width();
		windowHeight = $(window).height();
		  
		mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
		mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
        $('.background').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, rgba(179, 170, 255, 0.28), rgba(251, 251, 251, 0.4)), url(assets/images/background.png) no-repeat center center fixed');
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