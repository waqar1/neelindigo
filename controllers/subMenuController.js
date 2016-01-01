myApp.controller('subMenuController', ['$scope','$location','sharedService', function($scope,$location,sharedService){

	$scope.selectBA = function(value,val2){
		sharedService.setPosition(value);
		sharedService.setSubMenu(val2);
		if(value == 'before'){
			$location.path('/mordents-page');
		}else if(value == 'after'){
			$location.path('/list-menu');
		}
		
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
		$(this).removeClass('slideInRight');
		$(this).removeClass('animated');
		$(this).removeClass('pulse');
	});

	$('a').mouseenter(function(){
      audio.play();
    });

}]);