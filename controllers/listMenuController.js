myApp.controller('listMenuController', ['$scope', function($scope){

	$(".background").mousemove(function( event ) {
  		var w = $(this).width(),
        pct = 360*(+event.pageX)/w,
        bg = "linear-gradient(" + pct + "deg,#4ac1ff,#795bb0)";
        $(".background").css("background-image", bg);
	});

	$( '.anchorHover' ).hover(
		function() {
	        $(this).addClass('animated shake');
	    },
	    function() {
	        $(this).removeClass('animated shake');
	    }
	);

	$('.anchorHover').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(this).removeClass('slideInLeft');
		$(this).removeClass('animated');
		$(this).removeClass('shake');
	});
}]);