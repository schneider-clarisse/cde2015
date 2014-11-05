'use strict';

angular.module('CDE.schedule', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/schedule', {
    templateUrl: 'schedule/schedule.html',
    controller: 'ScheduleCtrl'
  });
}])

.controller('ScheduleCtrl', [function() {

}]);