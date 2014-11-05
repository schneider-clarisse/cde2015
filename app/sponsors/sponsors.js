'use strict';

angular.module('CDE.sponsors', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sponsors', {
    templateUrl: 'sponsors/sponsors.html',
    controller: 'SponsorsCtrl'
  });
}])

.controller('SponsorsCtrl', [function() {

}]);