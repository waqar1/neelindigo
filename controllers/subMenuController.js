myApp.controller('subMenuController', ['$scope', function($scope){

	$(".background").mousemove(function( event ) {
  		/*var w = $(this).width(),
        pct = 360*(+event.pageX)/w,
        bg = "linear-gradient(" + pct + "deg,#4ac1ff,#795bb0)";
        $(".background").css("background-image", bg);*/
	});

	$( "#firstImg" ).hover(
		function() {
	        $("#firstImg").addClass('animated shake');
	    },
	    function() {
	        $("#firstImg").removeClass('animated shake');
	    }
	);

	$('#firstImg').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$("#firstImg").removeClass('slideInLeft');
		$("#firstImg").removeClass('animated');
		$("#firstImg").removeClass('shake');
	});

	$( "#secondImg" ).hover(
		function() {
	        $("#secondImg").addClass('animated shake');
	    },
	    function() {
	        $("#secondImg").removeClass('animated shake');
	    }
	);

	$('#secondImg').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$("#secondImg").removeClass('slideInRight');
		$("#secondImg").removeClass('animated');
		$("#secondImg").removeClass('shake');
	});

}]);