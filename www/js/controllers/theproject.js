angular
	.module('scgallery')
    .controller('TheProjectController', TheProjectController);

TheProjectController.$inject = ['$scope','theproject'];
function TheProjectController($scope,theproject) {
	$scope.theproject = theproject
	console.log(theproject);
}