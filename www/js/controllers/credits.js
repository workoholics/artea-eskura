
angular
	.module('scgallery')
    .controller('CreditsController', CreditsController);

CreditsController.$inject = ['$scope','credits'];
function CreditsController($scope,credits) {
	$scope.credits = credits;
	console.log(credits);
}