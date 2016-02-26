// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('scgallery',['ionic','ngRoute'])

.run(function($ionicPlatform) {

  

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

  });

})

.controller('NavigationController',NavigationController)

.config(['$httpProvider','$sceDelegateProvider',function ($httpProvider,$sceDelegateProvider) {
  
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$')]);



  $httpProvider.interceptors.push(function($q) {
  
      var numLoadings = 0;

      return {
        request: function (config) {
            console.log('request');

            // numLoadings++;
            // var loader = document.getElementsByClassName('loader');
            // if(loader.length > 0){
            //   loader[0].style.display = 'inherit';
            // }
            return config || $q.when(config)
            
        },
        response: function (response) {
            console.log('response');

            // if ((--numLoadings) === 0) {
            //     // Show loader
            //     var loader = document.getElementsByClassName('loader');
            //     if(loader.length > 0){
            //       loader[0].style.display = 'none';
            //     }
            // }

            return response || $q.when(response);
        }
      };

  });
}]);

NavigationController.$inject = ['$scope','$ionicSideMenuDelegate','$location'];
function NavigationController($scope,$ionicSideMenuDelegate,$location) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.openLink = function(url,target,location){
    window.open(url,target,location);
  };

  $scope.changeActive = function(){
    $scope.menuActive = '';
    $scope.submenuActive = '';
    if($location.$$path.indexOf('expo') > 0){
      $scope.menuActive = '/expo';
      $scope.submenuActive = $location.$$path.replace('/expo','');
    }
    else{
      $scope.menuActive = $location.$$path;
    }
    console.log($scope.menuActive + ' -- ' + $scope.submenuActive);
  };
  $scope.changeActive();
  $scope.$on('$stateChangeStart', function(next, current) { 
    $scope.changeActive();
  });

  

  $scope.lang = 'eu';
}

