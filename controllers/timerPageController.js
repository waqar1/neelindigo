myApp.controller('timerPageController', ['$scope','$rootScope','$location', function($scope,$rootScope,$location){

	$(".background").mousemove(function( event ) {
  		var w = $(this).width(),
        pct = 360*(+event.pageX)/w,
        bg = "linear-gradient(" + pct + "deg,#4ac1ff,#795bb0)";
        $(".background").css("background-image", bg);
	});

    $(document).ready(function() {
        
        $('.burning').burn({
		  k: 100,
		  w: 100
		});
        
        $("h1").lettering();

        $("#slider2").roundSlider({
		    sliderType: "min-range",
		    value: 40,
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