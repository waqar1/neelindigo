myApp.controller('timerPageController', ['$scope','$rootScope','$location', function($scope,$rootScope,$location){

	$(".background").mousemove(function( event ) {
  		var w = $(this).width(),
      	pct = 200*(+event.pageX)/w,
      	bg = "linear-gradient(" + pct + "deg,rgba(16, 38, 82,0.5), rgba(255, 255, 255,0.0))";
        $('.background').css('background', bg + ', url(assets/images/background.jpg) no-repeat center center fixed');
	});

    $(document).ready(function() {
        
        var audio = document.getElementById("audioNg2");
        
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
		    sliderType: "min-range",
		    change: function (e) {

		    	audio.play();
		    	/*var k = 0;
		 		var i = 100;
		 		var j = e.value;
		 		var calc = (i/j);*/
		 		var i = 0;

				var counterBack = setInterval(function(){
				  if(i<=100){
				    $('.progress-bar').css('width', i +'%').attr('aria-valuenow', i);
				    document.getElementById("prgStatus").innerHTML = i + "% complete";
				    i = i+20;
				    /*k = k + calc;
				    i = i - calc;*/
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