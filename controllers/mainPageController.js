myApp.controller('mainPageController', ['$scope', function($scope){

	$(".background-menu").mousemove(function( event ) {
  		windowWidth = $(window).width();
		windowHeight = $(window).height();
		  
		mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
		mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
		if((mouseXpercentage > 20 && mouseXpercentage < 80) && (mouseYpercentage > 10 && mouseYpercentage < 80)){
			$('.background-menu').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, rgba(16, 38, 82,0.7) 1%, rgba(255, 255, 255,-2.0) 50%), url(assets/images/menubackground.png) no-repeat center center fixed');
		}else{
			$('.background-menu').css('background', 'radial-gradient(at 50% 50%, rgba(16, 38, 82,0.7) 2%, rgba(255, 255, 255,-2.0) 50%), url(assets/images/menubackground.png) no-repeat center center fixed');
		}
	});
}]);