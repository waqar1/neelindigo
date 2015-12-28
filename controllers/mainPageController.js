myApp.controller('mainPageController', ['$scope', function($scope){

	$(".background-menu").mousemove(function( event ) {
  		windowWidth = $(window).width();
		windowHeight = $(window).height();
		  
		mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
		mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
        $('.background-menu').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, rgba(84, 12, 138, 0.2), rgba(251, 251, 251, 0)), url(assets/images/menubackground.png) no-repeat center center fixed');
	});
}]);