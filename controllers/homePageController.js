myApp.controller('homePageController', ['$scope', function($scope){

	$scope.myVal = "Of blues there is only one real dye indigo by William morris.the word indigo having means of neel.in different languages like sanskirat,punjabi,Urdu and even in parsion indigo is called as Nee.-from 3500bc evidenceses comes from indus velly in shape of maddar dye so comes to know how old is.this sustainable craft had been export to Roman 300BC to 400AD and different placeses of entire world, irony of this in 19th century precious crafts face decline and downfall going to happen just because of synthetic dyes takes places of sustainable or natural dye";

	$(".background").mousemove(function( event ) {
  		/*var w = $(this).width(),
        pct = 360*(+event.pageX)/w,
        bg = "linear-gradient(" + pct + "deg,#4ac1ff,#795bb0)";
        $(".background").css("background-image", bg);*/
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