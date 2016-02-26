
angular
	.module('scgallery')
    .controller('ExpoController', ExpoController);

ExpoController.$inject = ['$scope','expos','$sce','$location'];
function ExpoController($scope,expos,$sce,$location) {
	/*Functions*/
	var loadVideoSize = function(){
		if(window.innerWidth < 520){
			$scope.videoWidth = '100%';
			$scope.videoHeight = (window.innerWidth * 270) / 500;
		}
		else if(window.innerWidth > 520 && window.innerWidth < 600){
			$scope.videoWidth = '500';
			$scope.videoHeight = 281;
		}
		else{
			$scope.videoWidth = '600';
			$scope.videoHeight = 337;
		}
	}

	/* End functions*/

	$scope.expodata = {};
	var exponame = $location.$$path.replace('/expo/','');
	$scope.expodata = expos[exponame];

	if($scope.expodata.video){
		$scope.expodata.video.url = $sce.trustAsResourceUrl($scope.expodata.video.url);
		loadVideoSize();
	}	
}