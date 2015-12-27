myApp.controller('homePageController', ['$scope', function($scope){

	$scope.myVal = "Of blues there is only one real dye indigo by William morris.the word indigo having means of neel.in different languages like sanskirat,punjabi,Urdu and even in parsion indigo is called as Nee.-from 3500bc evidenceses comes from indus velly in shape of maddar dye so comes to know how old is.this sustainable craft had been export to Roman 300BC to 400AD and different placeses of entire world, irony of this in 19th century precious crafts face decline and downfall going to happen just because of synthetic dyes takes places of sustainable or natural dye";

	$(".background").mousemove(function( event ) {
  		windowWidth = $(window).width();
		windowHeight = $(window).height();
		  
		mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
		mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
        $('.background').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, rgba(94, 0, 247, 0.08), rgba(0, 0, 0, 0)), url(assets/images/background.jpg) no-repeat center center fixed');
	});

	$( "#enterButton" ).hover(
		function() {
	        $("#enterButton").addClass('animated flip');
	    },
	    function() {
	        $("#enterButton").removeClass('animated flip');
	    }
	);

	$('#enterButton').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$("#enterButton").removeClass('rollIn');
		$("#enterButton").removeClass('animated');
		$("#enterButton").removeClass('flip');
	});
}]);