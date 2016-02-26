  
angular
  .module('scgallery')
  .config(routeConfig);

routeConfig.$inject = ['$stateProvider','$urlRouterProvider'];
function routeConfig($stateProvider,$urlRouterProvider) { 
  $urlRouterProvider.otherwise('/')

  $stateProvider
  	.state('home', {
	    url: '/',
	    templateUrl: 'views/home.html'
  	})
  	.state('expo',{
  		url: '/expo/:id',
  		templateUrl: 'views/expo.html',
  		controller: 'ExpoController'
  	})
    .state('credits',{
      url: '/credits',
      templateUrl: 'views/credits.html',
      controller: 'CreditsController'
    })
    .state('theproject',{
      url: '/theproject',
      templateUrl: 'views/theproject.html',
      controller: 'TheProjectController'
    });
}
