myApp.controller('listMenuController', ['$scope','$location','sharedService', function($scope,$location,sharedService){

	$scope.selectMaterial = function(val){
		sharedService.setMaterial(val);
		$location.path('/timer-page');
	};

	$(".background").mousemove(function( event ) {
  		var w = $(this).width(),
      	pct = 200*(+event.pageX)/w,
      	bg = "linear-gradient(" + pct + "deg,rgba(16, 38, 82,0.5), rgba(255, 255, 255,0.0))";
        $('.background').css('background', bg + ', url(assets/images/background.jpg) no-repeat center center fixed');
	});

	$( '.anchorHover' ).hover(
		function() {
	        $(this).addClass('animated pulse');
	    },
	    function() {
	        $(this).removeClass('animated pulse');
	    }
	);

	$('.anchorHover').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(this).removeClass('slideInLeft');
		$(this).removeClass('animated');
		$(this).removeClass('pulse');
	});

	$("a").tooltip();
}]);