myApp.controller('intervalPageController', ['$scope','$rootScope','$location', function($scope,$rootScope,$location){

	$(".backgroundInterval").mousemove(function( event ) {
  		var w = $(this).width(),
      	pct = 200*(+event.pageX)/w,
      	bg = "linear-gradient(" + pct + "deg,rgba(16, 38, 82,0.5), rgba(255, 255, 255,0.0))";
        $('.backgroundInterval').css('background', bg + ', url(assets/images/background-interval.png) no-repeat center center fixed');
	});

	$scope.cleartime = function(){
		clearTimeout(counterBack);
	};

    $(document).ready(function() {
        var i = 0;
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