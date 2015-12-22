myApp.controller('mainPageController', ['$scope', function($scope){

	$(".background").mousemove(function( event ) {
  		var w = $(this).width(),
        pct = 360*(+event.pageX)/w,
        bg = "linear-gradient(" + pct + "deg,#4ac1ff,#795bb0)";
        $(".background").css("background-image", bg);
	});

	$( "#Upper" ).hover(
		function() {
	        $("#Upper").addClass('animated rubberBand');
	    },
	    function() {
	        $("#Upper").removeClass('animated rubberBand');
	    }
	);

	$('#Upper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$("#Upper").removeClass('rotateIn');
		$("#Upper").removeClass('animated');
		$("#Upper").removeClass('rubberBand');
	});

	$( "#Left" ).hover(
		function() {
	        $("#Left").addClass('animated rubberBand');
	    },
	    function() {
	        $("#Left").removeClass('animated rubberBand');
	    }
	);

	$('#Left').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$("#Left").removeClass('rotateInUpLeft');
		$("#Left").removeClass('animated');
		$("#Left").removeClass('rubberBand');
	});

	$( "#Right" ).hover(
		function() {
	        $("#Right").addClass('animated rubberBand');
	    },
	    function() {
	        $("#Right").removeClass('animated rubberBand');
	    }
	);

	$('#Right').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$("#Right").removeClass('rotateInUpRight');
		$("#Right").removeClass('animated');
		$("#Right").removeClass('rubberBand');
	});

	$( "#Below" ).hover(
		function() {
	        $("#Below").addClass('animated rubberBand');
	    },
	    function() {
	        $("#Below").removeClass('animated rubberBand');
	    }
	);

	$('#Below').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$("#Below").removeClass('rotateIn');
		$("#Below").removeClass('animated');
		$("#Below").removeClass('rubberBand');
	});
}]);