myApp.controller('menuPageController', ['$scope', function($scope){

	$(".background").mousemove(function( event ) {
  		windowWidth = $(window).width();
		windowHeight = $(window).height();
		  
		mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
		mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
        $('.background').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, rgba(179, 170, 255, 0.28), rgba(251, 251, 251, 0.4)), url(assets/images/background.png) no-repeat center center fixed');
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
		$("#secondImg").removeClass('slideInDown');
		$("#secondImg").removeClass('animated');
		$("#secondImg").removeClass('shake');
	});

	$( "#thirdImg" ).hover(
		function() {
	        $("#thirdImg").addClass('animated shake');
	    },
	    function() {
	        $("#thirdImg").removeClass('animated shake');
	    }
	);

	$('#thirdImg').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$("#thirdImg").removeClass('slideInRight');
		$("#thirdImg").removeClass('animated');
		$("#thirdImg").removeClass('shake');
	});
}]);