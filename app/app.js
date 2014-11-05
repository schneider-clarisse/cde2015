'use strict';

// Declare app level module which depends on views, and components
angular.module('CDE', [
  'ngRoute',
  'CDE.about',
  'CDE.contact',
  'CDE.home',
  'CDE.schedule',
  'CDE.sponsors',
  'CDE.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])
.controller('NavBarController', ['$location', '$scope', function($location, $scope) {
	$scope.$on('$routeChangeStart', function(next, current) { 
     $scope.path = $location.path().substring(1);
   });
}]);
