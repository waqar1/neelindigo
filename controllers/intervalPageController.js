myApp.controller('intervalPageController', ['$scope','$rootScope','$location', function($scope,$rootScope,$location){

	$(".background").mousemove(function( event ) {
  		windowWidth = $(window).width();
		windowHeight = $(window).height();
		  
		mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
		mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
        $('.background').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, rgba(94, 0, 247, 0.08), rgba(0, 0, 0, 0)), url(assets/images/background-interval.png) no-repeat center center fixed');
	});

	$scope.cleartime = function(){
		clearTimeout(counterBack);
	};

    $(document).ready(function() {
        var i = 4;
		counterBack = setInterval(function(){
		  if(i>=0){
		    i = i-1;
		  } else {
		    clearTimeout(counterBack);
		    $rootScope.$apply(function() {
	        	$location.path('/type-menu');
	      	});
		  }  
		}, 1000);
    });
}]);