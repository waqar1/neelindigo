myApp.controller('mainPageController', ['$scope', function($scope){

	$(".background-menu").mousemove(function( event ) {
  		windowWidth = $(window).width();
		windowHeight = $(window).height();
		  
		mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
		mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
        $('.background-menu').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, rgba(179, 170, 255, 0.28), rgba(251, 251, 251, 0.4)), url(assets/images/menubackground.png) no-repeat center center fixed');
	});

	$( "#Upper" ).hover(
		function() {
	        $("#Upper").addClass('animated bounce');
	    },
	    function() {
	        $("#Upper").removeClass('animated bounce');
	    }
	);

	$('#Upper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$("#Upper").removeClass('rollIn');
		$("#Upper").removeClass('animated');
		$("#Upper").removeClass('bounce');
	});

	$( "#Left" ).hover(
		function() {
	        $("#Left").addClass('animated bounce');
	    },
	    function() {
	        $("#Left").removeClass('animated bounce');
	    }
	);

	$('#Left').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$("#Left").removeClass('rollIn');
		$("#Left").removeClass('animated');
		$("#Left").removeClass('bounce');
	});

	$( "#Right" ).hover(
		function() {
	        $("#Right").addClass('animated bounce');
	    },
	    function() {
	        $("#Right").removeClass('animated bounce');
	    }
	);

	$('#Right').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$("#Right").removeClass('rollIn');
		$("#Right").removeClass('animated');
		$("#Right").removeClass('bounce');
	});

	$( "#Below" ).hover(
		function() {
	        $("#Below").addClass('animated bounce');
	    },
	    function() {
	        $("#Below").removeClass('animated bounce');
	    }
	);

	$('#Below').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$("#Below").removeClass('rollIn');
		$("#Below").removeClass('animated');
		$("#Below").removeClass('bounce');
	});
}]);