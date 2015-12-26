myApp.controller('timerPageController', ['$scope', function($scope){

	$scope.timeSelected = "";
	$(".background").mousemove(function( event ) {
  		var w = $(this).width(),
        pct = 360*(+event.pageX)/w,
        bg = "linear-gradient(" + pct + "deg,#4ac1ff,#795bb0)";
        $(".background").css("background-image", bg);
	});

	
	$('.clockpicker').clockpicker({
		placement: 'top',
		align: 'left',
		donetext: 'Done'
	});

	$('.clockpicker').clockpicker()
	.find('input').change(function(){
		console.log(this.value);
		$scope.timeSelected = this.value;
	});
}]);