myApp.controller('subMenuController', ['$scope', function($scope){

	$(".background").mousemove(function( event ) {
  		windowWidth = $(window).width();
		windowHeight = $(window).height();
		  
		mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
		mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
        $('.background').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, rgba(94, 0, 247, 0.08), rgba(0, 0, 0, 0)), url(assets/images/background.jpg) no-repeat center center fixed');
	});

	$( '.anchorHover' ).hover(
		function() {
	        $(this).addClass('animated shake');
	    },
	    function() {
	        $(this).removeClass('animated shake');
	    }
	);

	$('.anchorHover').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(this).removeClass('slideInLeft');
		$(this).removeClass('slideInRight');
		$(this).removeClass('animated');
		$(this).removeClass('shake');
	});

}]);