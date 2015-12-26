myApp.controller('mainPageController', ['$scope', function($scope){

	$(".background").mousemove(function( event ) {
  		/*var w = $(this).width(),
        pct = 360*(+event.pageX)/w,
        bg = "linear-gradient(" + pct + "deg,#4ac1ff,#795bb0)";
        $(".background").css("background-image", bg);*/
	});

	$( "#Upper" ).hover(
		function() {
	        $("#Upper").addClass('animated flip');
	    },
	    function() {
	        $("#Upper").removeClass('animated flip');
	    }
	);

	$('#Upper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$("#Upper").removeClass('rollIn');
		$("#Upper").removeClass('animated');
		$("#Upper").removeClass('flip');
	});

	$( "#Left" ).hover(
		function() {
	        $("#Left").addClass('animated flip');
	    },
	    function() {
	        $("#Left").removeClass('animated flip');
	    }
	);

	$('#Left').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$("#Left").removeClass('rollIn');
		$("#Left").removeClass('animated');
		$("#Left").removeClass('flip');
	});

	$( "#Right" ).hover(
		function() {
	        $("#Right").addClass('animated flip');
	    },
	    function() {
	        $("#Right").removeClass('animated flip');
	    }
	);

	$('#Right').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$("#Right").removeClass('rollIn');
		$("#Right").removeClass('animated');
		$("#Right").removeClass('flip');
	});

	$( "#Below" ).hover(
		function() {
	        $("#Below").addClass('animated flip');
	    },
	    function() {
	        $("#Below").removeClass('animated flip');
	    }
	);

	$('#Below').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$("#Below").removeClass('rollIn');
		$("#Below").removeClass('animated');
		$("#Below").removeClass('flip');
	});
}]);