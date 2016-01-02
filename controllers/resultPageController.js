myApp.controller('resultPageController', ['$scope','sharedService', function($scope,sharedService){

	console.log(sharedService.toString());
	$scope.bF = {'dm':'Dyeing Material','mb': 'Mordents Bath'};

	$scope.makeResults = function(){
		$scope.fabric = sharedService.getFabric();
		$scope.position = sharedService.getPosition();
		$scope.mordent = sharedService.getMordent();
		$scope.mordentVal = sharedService.getMordentVal();
		$scope.material = sharedService.getMaterial();
		$scope.materialVal = sharedService.getMaterialVal();
		$scope.time = sharedService.getTime();
		$scope.sub = $scope.bF[sharedService.getSubMenu()];
		$scope.imgUrl = 'assets/samples/' + $scope.materialVal + '/' + $scope.materialVal + $scope.time + '/' + $scope.materialVal + "," + $scope.fabric + "," + $scope.mordentVal + "," + $scope.position + "," + $scope.time + ".jpg";
	};

	$(".background").mousemove(function( event ) {
  		var w = $(this).width(),
      	pct = 200*(+event.pageX)/w,
      	bg = "linear-gradient(" + pct + "deg,rgba(16, 38, 82,0.5), rgba(255, 255, 255,0.0))";
        $('.background').css('background', bg + ', url(assets/images/background.jpg) no-repeat center center fixed');
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

	$scope.makeResults();

	$('a').mouseenter(function(){
      audio.play();
    });
}]);