myApp.controller('homePageController', ['$scope', function($scope){

	$(".background-menu").mousemove(function( event ) {
  		windowWidth = $(window).width();
		windowHeight = $(window).height();
		  
		mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
		mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
        $('.background-menu').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, rgba(16, 38, 82,0.7), rgba(255, 255, 255,-2.0)), url(assets/images/menubackground.png) no-repeat center center fixed');
	});

	$( "#enterButton" ).hover(
		function() {
	        $("#enterButton").addClass('animated pulse');
	    },
	    function() {
	        $("#enterButton").removeClass('animated pulse');
	    }
	);

	$('#enterButton').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$("#enterButton").removeClass('rollIn');
		$("#enterButton").removeClass('animated');
		$("#enterButton").removeClass('pulse');
	});
}]);