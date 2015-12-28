myApp.controller('historyPageController', ['$scope', function($scope){

	$(".background").mousemove(function( event ) {
  		var w = $(this).width(),
      	pct = 200*(+event.pageX)/w,
      	bg = "linear-gradient(" + pct + "deg,rgba(16, 38, 82,0.5), rgba(255, 255, 255,0.0))";
        $('.background').css('background', bg + ', url(assets/images/background.jpg) no-repeat center center fixed');
	});

	$( '.hoverEffect' ).hover(
		function() {
	        $(this).addClass('animated pulse');
	    },
	    function() {
	        $(this).removeClass('animated pulse');
	    }
	);

	$('.hoverEffect').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(this).removeClass('bounceInDown');
		$(this).removeClass('animated');
		$(this).removeClass('pulse');
	});
}]);