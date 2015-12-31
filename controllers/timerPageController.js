myApp.controller('timerPageController', ['$scope','$rootScope','$location','sharedService', function($scope,$rootScope,$location,sharedService){

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

		 		var i = 0;

				var counterBack = setInterval(function(){
				  if(i<=100){
				    $('.progress-bar').css('width', i +'%').attr('aria-valuenow', i);
				    document.getElementById("prgStatus").innerHTML = i + "% complete";
				    i = i+20;
				  } else {
				    clearTimeout(counterBack);
				    if(sharedService.getPosition() == 'before'){
				    	$rootScope.$apply(function() {
				        	$location.path('/details-page');
				      	});
				    }else{
				    	$rootScope.$apply(function() {
				        	$location.path('/mordents-page');
				      	});
				    }
				  }
				  
				}, 1000);
		    }
		});
    });

}]);