myApp.controller('resultPageController', ['$scope','sharedService', function($scope,sharedService){

	console.log(sharedService.toString());
	$scope.bF = {'dm':'Dyeing Material','mb': 'Mordents Bath'};
	$scope.swatchesCollection = sharedService.getCollection();

	$scope.makeResults = function(){
		$scope.fabric = sharedService.getFabric();
		$scope.position = sharedService.getPosition();
		$scope.mordent = sharedService.getMordent();
		$scope.mordentVal = sharedService.getMordentVal();
		$scope.material = sharedService.getMaterial();
		$scope.materialVal = sharedService.getMaterialVal();
		$scope.time = sharedService.getTime();
		$scope.sub = $scope.bF[sharedService.getSubMenu()];
		$scope.imgUrl = 'assets/samples/' + $scope.materialVal + "," + $scope.fabric + "," + $scope.mordentVal + "," + $scope.position + "," + $scope.time + ".jpg";
		var collectionObj = {"fabric":$scope.fabric,"position":$scope.position,"mordent":$scope.mordent,"mordentVal":$scope.mordentVal,"material":$scope.material,"materialVal":$scope.materialVal,"time":$scope.time,"sub":$scope.sub,"imgUrl":$scope.imgUrl};
		if($scope.imgUrl.indexOf('undefined') < 0){
			sharedService.storeCollection(collectionObj);
		}
	};

	$scope.printDiv = function() {
	  var printContents = document.getElementById('sCollection').innerHTML;
	  var popupWin = window.open('', '_blank', 'width=300,height=300');
	  popupWin.document.open()
	  popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + printContents + '</html>');
	  popupWin.document.close();
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