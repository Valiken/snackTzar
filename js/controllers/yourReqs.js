'use strict';

/**
 * @ngdoc function
 * @name snackTzarApp.controller:YourReqCtrl
 * @description
 * # YourReqCtrl
 * Controller of the snackTzarApp
 */
angular.module('snackTzarApp')
  .controller('YourReqCtrl', ["$scope", "FireBaseServ", function ($scope, FireBaseServ) {
    $scope.snackList = FireBaseServ;
    
}]);