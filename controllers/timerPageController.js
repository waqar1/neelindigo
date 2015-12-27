myApp.controller('timerPageController', ['$scope','$rootScope','$location', function($scope,$rootScope,$location){

	$(".background").mousemove(function( event ) {
  		windowWidth = $(window).width();
		windowHeight = $(window).height();
		  
		mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
		mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
        $('.background').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, rgba(179, 170, 255, 0.28), rgba(251, 251, 251, 0.4)), url(assets/images/background.png) no-repeat center center fixed');
	});

    $(document).ready(function() {
        
        
        $('.burning').burn({
		  k: 100,
		  w: 100
		});
        
        $("h1").lettering();

        $("#slider2").roundSlider({
		    sliderType: "min-range",
		    step: 20,
		    min: 0,
	        max: 60,
		    value: 0,
		    change: function (e) {

		    	var k = 0;
		 		var i = 100;
		 		var j = e.value;
		 		var calc = (i/j);

				var counterBack = setInterval(function(){
				  if(i>=0){
				    $('.progress-bar').css('width', k +'%');
				    k = k + calc;
				    i = i - calc;
				  } else {
				    clearTimeout(counterBack);
				    $rootScope.$apply(function() {
			        	$location.path('/details-page');
			      	});
				  }
				  
				}, 1000);
		    }
		});
    });

}]);