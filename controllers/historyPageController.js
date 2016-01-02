myApp.controller('historyPageController', ['$scope','historicalService', function($scope,historicalService){
	$scope.imagesCollection = [];
	$scope.baseUrl = "";
	$scope.selectedImg = "";

	$(".background").mousemove(function( event ) {
  		var w = $(this).width(),
      	pct = 200*(+event.pageX)/w,
      	bg = "linear-gradient(" + pct + "deg,rgba(16, 38, 82,0.5), rgba(255, 255, 255,0.0))";
        $('.background').css('background', bg + ', url(assets/images/background.jpg) no-repeat center center fixed');
	});

	$( '.hoverEffect' ).hover(
		function() {
	        $(this).addClass('animated pulse');
	    },
	    function() {
	        $(this).removeClass('animated pulse');
	    }
	);

	$('.hoverEffect').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(this).removeClass('bounceInDown');
		$(this).removeClass('animated');
		$(this).removeClass('pulse');
	});

	$('a').mouseenter(function(){
      audio.play();
    });

    $scope.loadImagesCollection = function(){
    	historicalService.fetchHistoricalData($scope).then(function(response){
    		if(response && response.data){
    			$scope.baseUrl = response.data.baseUrl;
    			$scope.imagesCollection = response.data.historyImages;
    		}
    	},function(error){
    		console.log(error);
    	});
    };

    $scope.selectImage = function(val){
    	$scope.selectedImg = $scope.imagesCollection.urls[val].url;
    };

    $scope.loadImagesCollection();
}]);